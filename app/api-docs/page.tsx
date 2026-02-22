'use client';

import dynamic from 'next/dynamic';
import openApiSpec from '@/lib/openapi.json';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerUI = dynamic(() => import('swagger-ui-react'), {
  ssr: false,
});

export default function ApiDocsPage() {
  return (
    <div className="min-h-screen bg-white py-10 px-6">
      
      <div className="max-w-6xl mx-auto">
        
        <h1 className="text-3xl font-bold mb-2">
          VRM Group Upload API Documentation
        </h1>

        <p className="text-gray-600 mb-8">
          Interactive API documentation for uploading files to Cloudflare R2.
        </p>

        <div className="border rounded-lg shadow-sm">
          <SwaggerUI spec={openApiSpec} />
        </div>

      </div>

    </div>
  );
}