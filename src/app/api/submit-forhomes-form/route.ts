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
    <h2>Property Details</h2>
    <ul>
      <li>Construction Type: ${formData.constructionType}</li>
      <li>Exterior Material: ${formData.exteriorMaterial}</li>
      <li>Roof Type: ${formData.roofTileType}</li>
      <li>Roof Color: ${formData.roofColor}</li>
      <li>Roof Style: ${formData.roofStyle}</li>
      <li>Compass Direction: ${formData.compassDirection}</li>
      <li>House Type: ${formData.houseType}</li>
    </ul>

    <h2>Energy Details</h2>
    <ul>
      <li>Household Size: ${formData.householdSize}</li>
      <li>Monthly Usage: ${formData.monthlyUsage}</li>
      <li>Battery Size: ${formData.batterySize}</li>
    </ul>

    <h2>Contact Information</h2>
    <ul>
      <li>Name: ${formData.fullName}</li>
      <li>Email: ${formData.email}</li>
      <li>Address: ${formData.addressLine1} ${formData.addressLine2 || ''}</li>
      <li>City: ${formData.city}</li>
      <li>Postcode: ${formData.postcode}</li>
    </ul>

    <h2>Additional Notes</h2>
    <p>${formData.notes || 'No additional notes provided.'}</p>
  `;
}

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // Send email to customer
    await transporter.sendMail({
      from: process.env.MY_EMAIL_ADRESS,
      to: formData.email,
      subject: 'Your Solar Installation Request - GerrhaEnergy',
      html: `

        <h1>Thank you for your solar installation request!</h1>
        <p>Dear ${formData.fullName},</p>
        <p>We have received your request and will review your requirements. Our team will contact you shortly to discuss the next steps.</p>
        ${generateEmailContent(formData)}
        <p>Best regards,<br>GerrhaEnergy Team</p>
      `
    });

    // Send email to installer
    await transporter.sendMail({
      from: process.env.MY_EMAIL_ADRESS,
      to: process.env.INSTALLER_EMAIL,
      subject: 'New Solar Installation Request',
      html: `

        <h1>New Installation Request</h1>
        ${generateEmailContent(formData)}
      `
    });

    // Send email to owner
    await transporter.sendMail({
      from: process.env.MY_EMAIL_ADRESS,
      to: process.env.OWNER_EMAIL,
      subject: 'New Solar Installation Lead',
      html: `

        <h1>New Lead Alert</h1>
        ${generateEmailContent(formData)}
      `
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully' 
    });

  } catch (error) {
    console.error('Error processing form:', error);
    return NextResponse.json(
      { success: false, message: 'Error submitting form' },
      { status: 500 }
    );
  }
}