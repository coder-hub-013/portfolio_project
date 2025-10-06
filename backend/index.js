const express = require("express");
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.post("/api/m9/c8/a9/contact", async (req, res) => {
  console.log(req.body);
  if (!req.body.inputData.message || req.body.inputData.message.trim() === "") {
    return res.status(400).json({ error: "Message cannot be empty" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 2525,
      auth: {
        user: process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS
      },
    });

    await transporter.sendMail({
      from: req.body.inputData.email, 
      to: process.env.EMAIL_USER, 
      subject: `Portfolio Contact from ${req.body.inputData.name}`,
      text: `Message : ${req.body.inputData.message} \n \n from: ${req.body.inputData.email}`,
    });

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending message." });
  }
});

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});



app.listen(8080, () => {
  console.log("Server is listing on port 8080");
});
