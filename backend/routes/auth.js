const express = require('express');
const router = express.Router();
const sendEmail = require('../utils/sendEmail');

let otpStore = {}; // In-memory store, use Redis or MongoDB for production

router.post('/send-otp', async (req, res) => {
  const { email , name} = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  try {
    // Log the email and OTP to the terminal
    console.log(`Sending OTP to email: ${email}, OTP: ${otp}`);
    await sendEmail(email, otp, name);
    otpStore[email] = otp;
    setTimeout(() => delete otpStore[email], 5 * 60 * 1000); // OTP expires in 5 mins
    res.json({ message: 'OTP sent' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to send OTP', error: err.message });
  }
});

router.post('/verify-otp', (req, res) => {
  const { email, otp } = req.body;

  if (otpStore[email] === otp) {
    delete otpStore[email];
    return res.json({ verified: true });
  }

  res.status(400).json({ verified: false, message: 'Invalid OTP' });
});

module.exports = router;
