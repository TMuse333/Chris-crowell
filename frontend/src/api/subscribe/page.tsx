import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  try {
    // Set up Nodemailer transport
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: false, // true for 465, false for 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: `"Your Brand Name" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Subscription Confirmation",
      text: `Thank you for subscribing to our newsletter! Stay tuned for updates.`,
      html: `<p>Thank you for subscribing to our newsletter! Stay tuned for updates.</p>`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Subscription successful! Check your email for confirmation." });
  } catch (error) {
    console.error("Email sending error:", error);
    return res.status(500).json({ message: "Something went wrong while sending the email." });
  }
}
