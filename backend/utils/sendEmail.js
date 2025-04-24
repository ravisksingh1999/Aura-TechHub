const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendEmail = async (to, otp, name) => {
  const mailOptions = {
    from: `"Aura TechHub" <${process.env.EMAIL_USER}>`,
    to,
    subject: `Welcome to Aura TechHub, ${name}! Here's your OTP to get started`,
    html: `
      <html>
        <head>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              background-color: #f4f7fa;
              color: #333;
              padding: 20px;
            }
            .container {
              max-width: 600px;
              margin: auto;
              background-color: #ffffff;
              border-radius: 10px;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
              padding: 30px;
              text-align: center;
            }
            .otp-box {
              font-size: 28px;
              font-weight: bold;
              background-color: #eef6ff;
              color: #0a66c2;
              padding: 15px;
              border-radius: 8px;
              margin: 20px 0;
              letter-spacing: 3px;
            }
            .footer {
              margin-top: 30px;
              font-size: 12px;
              color: #777;
            }
            .highlight {
              color: #0a66c2;
              font-weight: bold;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>👋 Hello ${name},</h2>
            <p>Welcome to <span class="highlight">Aura TechHub</span>! We're thrilled to have you on board.</p>
            <p>To complete your account setup, please use the following OTP:</p>
            <div class="otp-box">${otp}</div>
            <p>This code is valid for the next 5 minutes.</p>
            <p>If you didn't request this, feel free to ignore this message.</p>
            <div class="footer">
              &copy; ${new Date().getFullYear()} Aura TechHub. All rights reserved.
            </div>
          </div>
        </body>
      </html>
    `,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
