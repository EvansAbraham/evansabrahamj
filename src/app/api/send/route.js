import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const { email, subject, message } = await req.json();

  // Create a transporter object using Gmail SMTP
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // smtp.gmail.com
    port: process.env.SMTP_PORT, // 587
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, // your-email@gmail.com
      pass: process.env.SMTP_PASS, // your Gmail password or app password
    },
  });

  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_USER, // Your email address (authenticated)
      to: process.env.SMTP_USER, // Your email address (where you receive messages)
      subject: subject,
      html: `
        <h1>${subject}</h1>
        <p>New message from: ${email}</p>
        <p>Message:</p>
        <p>${message}</p>
      `,
      replyTo: email, // Set the reply-to to the recruiter's email
    });

    console.log("Message sent: %s", info.messageId);
    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email." });
  }
}
