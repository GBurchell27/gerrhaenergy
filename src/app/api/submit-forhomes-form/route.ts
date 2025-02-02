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
      <li>Roof Tile Type: ${formData.roofTileType}</li>
      <li>Roof Color: ${formData.roofColor}</li>
      <li>Roof Style: ${formData.roofStyle}</li>
      <li>Compass Direction: ${formData.compassDirection}</li>
    </ul>

    <h2>Cable Configuration</h2>
    <ul>
      <li>Cable Color: ${formData.cableColor}</li>
      <li>Cable Route: ${formData.cableRoute}</li>
    </ul>

    <h2>Energy Details</h2>
    <ul>
      <li>Household Size: ${formData.householdSize}</li>
      <li>Monthly Usage: ${formData.monthlyUsage} kWh</li>
      <li>Energy Vision: ${formData.energyVision}</li>
      <li>Vision Details: ${formData.energyVisionDetails}</li>
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
    console.log('Environment variables check:', {
      hasEmail: !!process.env.MY_EMAIL_ADRESS,
      hasPassword: !!process.env.MY_EMAIL_PASSWORD,
      hasInstallerEmail: !!process.env.INSTALLER_EMAIL,
      hasOwnerEmail: !!process.env.OWNER_EMAIL,
    });

    const formData = await request.json();
    console.log('Received form data:', formData);


    
    // ******************** Send email to customer ********************
    //
    const customerEmail = await transporter.sendMail({
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
    console.log('Customer email sent:', customerEmail.messageId);



    // ******************** Send email to installer ********************
    //
    const installerEmail = await transporter.sendMail({
      from: process.env.MY_EMAIL_ADRESS,

      to: process.env.INSTALLER_EMAIL,
      subject: 'New Solar Installation Request',
      html: `

        <h1>New Installation Request - customer filled in the online form</h1>
        ${generateEmailContent(formData)}
      `
    });
    console.log('Installer email sent:', installerEmail.messageId);



    // ******************** Send email to owner ********************
    //
    const ownerEmail = await transporter.sendMail({
      from: process.env.MY_EMAIL_ADRESS,

      to: process.env.OWNER_EMAIL,
      subject: 'New Solar Installation Lead',
      html: `
        <h1>New Lead Alert - customer filled in the online form</h1>
        ${generateEmailContent(formData)}
      `
    });
    console.log('Owner email sent:', ownerEmail.messageId);



    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully' 
    });

  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: error instanceof Error ? error.message : 'Error submitting form',
        details: error instanceof Error ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}