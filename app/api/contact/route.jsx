import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { firstName, lastName, subject = "N/A", email, message } = await request.json();

    if (!firstName || !lastName || !email || !message) {
      return new Response(
        JSON.stringify({ error: "All required fields must be filled out." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    
    // Configure Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // 🔹 Your Gmail from .env (javedsiddiqui@gmail.com)
        pass: process.env.GMAIL_PASS, // 🔹 App password from .env
      },
    });

    const mailOptions = {
      from: `"${firstName} ${lastName}" <${process.env.GMAIL_USER}>`, // 🔹 Must be your Gmail due to Gmail restrictions
      replyTo: email, // 🔹 This allows you to reply directly to the user
      to: "newrangolibuilderssInnrb@gmail.com", // 🔹 Your recipient email
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `
        Name: ${firstName} ${lastName}
        Subject: ${subject}
        Email: ${email}
        Message: ${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "✅ Email sent successfully!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("❌ Error in sending email:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
