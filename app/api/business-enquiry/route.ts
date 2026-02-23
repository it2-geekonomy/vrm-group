import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, phone, email, numberOfPeople, dateFrom, dateTo } = await req.json();

    if (!name || !email || !phone || !numberOfPeople || !dateFrom || !dateTo) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "VRM Group <no-reply@vrmgroup.org>",
      to: ["vrmgroup.digital@gmail.com"],
      subject: `📋 New Business Enquiry from ${name}`,
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
        BUSINESS ENQUIRY NOTIFICATION
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
        A new business enquiry has been submitted through the VRM Group website.
        Below are the details:
        </p>
        
        <!-- INFO TABLE -->
        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-size:14px;">
        
        <tr>
        <td style="padding:14px 0;color:#999999;width:180px;">Full Name</td>
        <td style="padding:14px 0;color:#ffffff;font-weight:500;">${name}</td>
        </tr>
        
        <tr>
        <td colspan="2" style="border-top:1px solid #222;"></td>
        </tr>
        
        <tr>
        <td style="padding:14px 0;color:#999999;">Phone Number</td>
        <td style="padding:14px 0;color:#ffffff;font-weight:500;">${phone}</td>
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
        <td style="padding:14px 0;color:#999999;">Number of People</td>
        <td style="padding:14px 0;color:#ffffff;font-weight:500;">${numberOfPeople}</td>
        </tr>
        
        <tr>
        <td colspan="2" style="border-top:1px solid #222;"></td>
        </tr>
        
        <tr>
        <td style="padding:14px 0;color:#999999;">Date From</td>
        <td style="padding:14px 0;color:#ffffff;font-weight:500;">${new Date(dateFrom).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</td>
        </tr>
        
        <tr>
        <td colspan="2" style="border-top:1px solid #222;"></td>
        </tr>
        
        <tr>
        <td style="padding:14px 0;color:#999999;">Date To</td>
        <td style="padding:14px 0;color:#ffffff;font-weight:500;">${new Date(dateTo).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</td>
        </tr>
        
        </table>
        
        </td>
        </tr>
        
        <!-- FOOTER -->
        <tr>
        <td style="border-top:1px solid #222;padding:25px 40px;text-align:center;">
        <p style="margin:0;color:#666666;font-size:12px;line-height:1.5;">
        This is an automated notification from the VRM Group website.<br/>
        Please respond to the enquiry at your earliest convenience.
        </p>
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
  } catch (error: any) {
    console.error("Error sending business enquiry email:", error);
    return NextResponse.json(
      { error: error.message || "Failed to send enquiry" },
      { status: 500 }
    );
  }
}
