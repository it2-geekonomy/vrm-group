import { NextRequest, NextResponse } from 'next/server';
import { S3Client, PutObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3';

/* ===============================
   CONFIG
================================= */

const ALLOWED_SECTIONS = ['homepage', 'about', 'ourbusiness', 'gallery', 'contactus', 'others'] as const;

const ALLOWED_MIME_TYPES = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/webp',
  'image/svg+xml',
  'image/bmp',
  'image/tiff',
  'video/mp4',
  'video/mpeg',
  'video/quicktime',
  'video/x-msvideo',
  'video/x-ms-wmv',
  'video/webm',
  'video/ogg',
];

const MAX_FILE_SIZE = 500 * 1024 * 1024; // 40MB
const BUCKET_NAME = 'vrm-media';

/* ===============================
   S3 CLIENT
================================= */

function getS3Client() {
  const { R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY } = process.env;

  if (!R2_ACCOUNT_ID || !R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY) {
    throw new Error('Missing R2 credentials');
  }

  return new S3Client({
    region: 'auto',
    endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: R2_ACCESS_KEY_ID,
      secretAccessKey: R2_SECRET_ACCESS_KEY,
    },
  });
}

function jsonError(message: string, status = 400) {
  return NextResponse.json({ success: false, error: message }, { status });
}

/* ===============================
   POST – Upload File
================================= */

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const section = formData.get('section') as string | null;

    // Validate section
    if (!section || !ALLOWED_SECTIONS.includes(section as any)) {
      return jsonError(`Invalid section. Allowed: ${ALLOWED_SECTIONS.join(', ')}`);
    }

    // Validate file
    if (!file) return jsonError('No file provided');

    if (file.size > MAX_FILE_SIZE) {
      return jsonError(`File exceeds 40MB limit`);
    }

    if (!ALLOWED_MIME_TYPES.includes(file.type)) {
      return jsonError('Invalid file type');
    }

    const timestamp = Date.now();
    const cleanName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const key = `website/${section}/${timestamp}-${cleanName}`;

    const buffer = Buffer.from(await file.arrayBuffer());

    const s3Client = getS3Client();

    await s3Client.send(
      new PutObjectCommand({
        Bucket: BUCKET_NAME,
        Key: key,
        Body: buffer,
        ContentType: file.type,
      })
    );

    const publicUrl = process.env.R2_PUBLIC_URL;
    if (!publicUrl) return jsonError('R2_PUBLIC_URL not configured', 500);

    const baseUrl = publicUrl.replace(/\/$/, '');
    const fileUrl = `${baseUrl}/${key}`;

    return NextResponse.json({
      success: true,
      url: fileUrl,
      key,
      section,
      fileName: cleanName,
      size: file.size,
      type: file.type,
    });

  } catch (error: any) {
    console.error('Upload error:', error);
    return jsonError(error.message || 'Upload failed', 500);
  }
}

/* ===============================
   GET – List Files by Section
================================= */

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const section = searchParams.get('section');

    if (!section || !ALLOWED_SECTIONS.includes(section as any)) {
      return jsonError(`Invalid section. Allowed: ${ALLOWED_SECTIONS.join(', ')}`);
    }

    const publicUrl = process.env.R2_PUBLIC_URL;
    if (!publicUrl) return jsonError('R2_PUBLIC_URL not configured', 500);

    const s3Client = getS3Client();

    const response = await s3Client.send(
      new ListObjectsV2Command({
        Bucket: BUCKET_NAME,
        Prefix: `website/${section}/`,
      })
    );

    const baseUrl = publicUrl.replace(/\/$/, '');

    const files = (response.Contents || []).map((item) => ({
      key: item.Key,
      fileName: item.Key?.split('/').pop(),
      url: `${baseUrl}/${item.Key}`,
      size: item.Size,
      lastModified: item.LastModified?.toISOString(),
      section,
    }));

    return NextResponse.json({
      success: true,
      section,
      count: files.length,
      files,
    });

  } catch (error: any) {
    console.error('List error:', error);
    return jsonError(error.message || 'Failed to list files', 500);
  }
}