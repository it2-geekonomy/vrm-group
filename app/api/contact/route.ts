import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "VRM Group <no-reply@vrmgroup.org>",
      to: ["sachin@geekonomy.in"],
      subject: `🚀 New Contact Message from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </head>
        
        <body style="margin:0;padding:0;background:#0a0a0a;font-family:Arial,Helvetica,sans-serif;">
        
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:50px 15px;">
        <tr>
        <td align="center">
        
        <table width="640" cellpadding="0" cellspacing="0" style="background:#141414;border-radius:16px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,0.6);">
        
        <!-- TOP STRIP -->
        <tr>
        <td style="background:#ED1C24;height:6px;"></td>
        </tr>
        
        <!-- HEADER -->
        <tr>
        <td style="padding:35px 40px 25px 40px;text-align:left;">
        <h2 style="margin:0;color:#ffffff;font-size:24px;font-weight:600;letter-spacing:0.5px;">
        VRM GROUP
        </h2>
        <p style="margin:6px 0 0 0;color:#888888;font-size:13px;letter-spacing:2px;">
        WEBSITE ENQUIRY NOTIFICATION
        </p>
        </td>
        </tr>
        
        <!-- DIVIDER -->
        <tr>
        <td style="border-top:1px solid #222;"></td>
        </tr>
        
        <!-- BODY CONTENT -->
        <tr>
        <td style="padding:35px 40px;color:#ffffff;">
        
        <p style="margin:0 0 30px 0;font-size:15px;color:#bbbbbb;line-height:1.6;">
        A new enquiry has been submitted through the official VRM Group website.
        Below are the details of the lead:
        </p>
        
        <!-- INFO TABLE -->
        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-size:14px;">
        
        <tr>
        <td style="padding:14px 0;color:#999999;width:140px;">Full Name</td>
        <td style="padding:14px 0;color:#ffffff;font-weight:500;">${name}</td>
        </tr>
        
        <tr>
        <td colspan="2" style="border-top:1px solid #222;"></td>
        </tr>
        
        <tr>
        <td style="padding:14px 0;color:#999999;">Email Address</td>
        <td style="padding:14px 0;color:#ffffff;font-weight:500;">${email}</td>
        </tr>
        
        <tr>
        <td colspan="2" style="border-top:1px solid #222;"></td>
        </tr>
        
        <tr>
        <td style="padding:14px 0;color:#999999;">Contact Number</td>
        <td style="padding:14px 0;color:#ffffff;font-weight:500;">${phone || "Not Provided"}</td>
        </tr>
        
        </table>
        
        <!-- MESSAGE SECTION -->
        <div style="margin-top:40px;">
        <p style="margin:0 0 12px 0;color:#999999;font-size:13px;letter-spacing:1px;">
        MESSAGE
        </p>
        
        <div style="background:#0f0f0f;padding:22px;border-radius:12px;border:1px solid #222;">
        <p style="margin:0;color:#dddddd;font-size:14px;line-height:1.7;white-space:pre-line;">
        ${message}
        </p>
        </div>
        </div>
        
        </td>
        </tr>
        
        <!-- FOOTER -->
        <tr>
        <td style="border-top:1px solid #222;"></td>
        </tr>
     <tr>
<td style="padding:25px 40px;background:#111;color:#666;font-size:12px;text-align:center;line-height:1.6;">
© ${new Date().getFullYear()} VRM Group  
<br/>
Building Trust. Creating Value.  
<br/><br/>
This notification was automatically generated from vrmgroup.org
</td>
</tr>
        
        </table>
        
        </td>
        </tr>
        </table>
        
        </body>
        </html>
        `,
    });

    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}