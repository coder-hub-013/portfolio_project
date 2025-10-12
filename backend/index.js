const express = require("express");
const dotenv = require('dotenv');
dotenv.config();

const path = require('path');

const app = express();
const resend = require('resend');
const reSEND = new resend.Resend(process.env.RESEND_API_KEY);
app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// app.post("/api/m9/c8/a9/contact", async (req, res) => {
//   console.log(req.body);
//   if (!req.body.inputData.message || req.body.inputData.message.trim() === "") {
//     return res.status(400).json({ error: "Message cannot be empty" });
//   }
//   return res.status(400).json({ error: "Work in progress" });

//   try {
//     console.log("I am started");
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       host: "smtp.gmail.com",
//       // port: 2525,
//       // port: 465,
//       secure:true,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass:process.env.EMAIL_PASS
//       },
//     });

//     console.log("i AM triggered");

//     await transporter.sendMail({
//       from: req.body.inputData.email, 
//       to: process.env.EMAIL_USER, 
//       subject: `Portfolio Contact from ${req.body.inputData.name}`,
//       text: `Message : ${req.body.inputData.message} \n \n from: ${req.body.inputData.email}`,
//     });
//     console.log("i am completed");
//     res.status(200).json({ message: "Message sent successfully!" });
//   } catch (error) {
//     console.log("I am failed");
//     console.error(error);
//     // res.status(500).json({ message: "Error sending message." });
//     res.status(500).json({ message: "Failed to send email", error: error.message });
//   }
// });

app.post('/api/m9/c8/a9/contact', async (req, res) => {
   
  try {
    const { name, email, message } = req.body.inputData;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'name, email and message are required' });
    }    
    const safeName = String(name).replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const safeEmail = String(email).replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const safeMessage = String(message).replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, '<br/>');

    const from = process.env.EMAIL_FROM || `Website Contact <no-reply || 'example.com'}>`;
    const to = process.env.EMAIL_TO; // 
    if (!to) {
      return res.status(500).json({ success: false, error: 'Server is not configured with EMAIL_TO' });
    }

    const subject = `New message from ${safeName} via website`;

    const html = `
      <h2>New contact message</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Message:</strong></p>
      <p>${safeMessage}</p>
      <hr/>
      <p>Sent via Resend</p>
    `;
    console.log(html);

    const result = await reSEND.emails.send({
      from,
      to,
      subject,
      html,
    });

    console.log('Resend result:', result);
    return res.status(200).json({ success: true, message: 'Email sent' });
  } catch (err) {
    console.error('Send email error:', err);
    return res.status(500).json({ success: false, error: 'Failed to send email' });
  }
});

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});



app.listen(8080, () => {
  console.log("Server is listing on port 8080");
});
