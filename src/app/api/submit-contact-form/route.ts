import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MY_EMAIL_ADRESS,
    pass: process.env.MY_EMAIL_PASSWORD,
  },
});

function generateEmailContent(formData: any) {
  return `
    <h2>Contact Form Submission</h2>
    <ul>
      <li>Name: ${formData.name}</li>
      <li>Email: ${formData.email}</li>
    </ul>

    <h2>Message</h2>
    <p>${formData.message}</p>
  `;
}

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    console.log('Received contact form data:', formData);

    // Send email to owner
    const ownerEmail = await transporter.sendMail({
      from: process.env.MY_EMAIL_ADRESS,
      to: process.env.OWNER_EMAIL,
      subject: 'New Contact Form Submission',
      html: `
        <h1>New Contact Form Submission</h1>
        <p>Customer filled in the online form to contact the company from the contact page.</p>
        ${generateEmailContent(formData)}
      `
    });
    console.log('Owner email sent:', ownerEmail.messageId);

    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully' 
    });

  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: error instanceof Error ? error.message : 'Error sending message',
        details: error instanceof Error ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}
