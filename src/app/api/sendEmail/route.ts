import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    const resend = new Resend(process.env.RESEND_API_KEY);
    https://drive.google.com/file/d/1ntsIKwBsX3oM0kSODhT7ziEsOMljnwl1/view?usp=drive_link
    await resend.emails.send({
      from: `FS laundry <contact@faststeplaundry.online>`,
      to: "fast.step.laundry@gmail.com",
      subject: "Message from custumer",
      html: `<h1>Contact Form Submission</h1>
      
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong> ${message}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);

    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";

    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
