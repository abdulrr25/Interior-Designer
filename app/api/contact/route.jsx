import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    // Parse the request body
    const { firstName, lastName, company, email, message } = await request.json();

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return new Response(
        JSON.stringify({ error: "All required fields must be filled out." }),
        { status: 400 }
      );
    }

    // Create a transporter object using your email service credentials
    const transporter = nodemailer.createTransport({
      service: "gmail", // You can replace it with your email service provider
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address from environment variables
        pass: process.env.GMAIL_PASS, // Your Gmail app password
      },
    });

    // Configure the email to be sent
    const mailOptions = {
      from: email, // The sender's email
      
      to: "newrangolibuildersnrb@gmail.com", // Your email address
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `
        Name: ${firstName} ${lastName}
        Company: ${company}
        Email: ${email}
        Message: ${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return a success response
    return new Response(JSON.stringify({ success: true, message: "Email sent successfully!" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error in sending email:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
    });
  }
}
