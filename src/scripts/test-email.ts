
// I set this code up to test the email configuration.
// It is not used in the project.
// I can run it to test the email configuration.
// I can also run it to troubleshoot the email configuration.
// I can also run it to test the email configuration.
// I can also run it to test the email configuration.




const nodemailer = require('nodemailer');

// Load environment variables
require('dotenv').config();

async function testEmailSetup() {
  console.log('Testing email configuration...');

  // Verify environment variables
  if (!process.env.MY_EMAIL_ADRESS || !process.env.MY_EMAIL_PASSWORD) {
    console.error('❌ Missing email credentials in .env file');
    console.log('Please ensure you have MY_EMAIL_ADRESS and MY_EMAIL_PASSWORD set in your .env file');
    return;
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MY_EMAIL_ADRESS,
      pass: process.env.MY_EMAIL_PASSWORD,
    },
  });

  try {
    // Verify connection configuration
    await transporter.verify();
    console.log('✅ SMTP connection successful');

    // Send test email
    const info = await transporter.sendMail({
      from: process.env.MY_EMAIL_ADRESS,
      to: process.env.MY_EMAIL_ADRESS, // Send to yourself
      subject: 'GerrhaEnergy Email Test',
      html: `
        <h1>Email Configuration Test</h1>
        <p>If you're reading this, your email configuration is working correctly!</p>
        <p>Timestamp: ${new Date().toISOString()}</p>
      `
    });

    console.log('✅ Test email sent successfully');
    console.log('Message ID:', info.messageId);
    console.log('Preview URL:', nodemailer.getTestMessageUrl(info));

  } catch (error) {
    console.error('❌ Error during email test:', error);
    console.log('\nTroubleshooting tips:');
    console.log('1. Verify your MY_EMAIL_ADRESS and MY_EMAIL_PASSWORD in .env are correct');
    console.log('2. Ensure 2FA is enabled on your Google account');
    console.log('3. Confirm you\'re using an App Password, not your regular Gmail password');
    console.log('4. Check if less secure app access is enabled in your Google account');
  }
}

// Run the test
testEmailSetup(); 