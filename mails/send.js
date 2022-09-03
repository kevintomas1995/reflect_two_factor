const nodemailer = require("nodemailer");

async function main() {
  const transporter = nodemailer.createTransport({
    host: "localhost",
    port: 7777,
    secure: false, // true for 465, false for other ports
  });

  const info = await transporter.sendMail({
    from: '"Test Person" <test@test.com>',
    to: "reciever@googlemail.com", // list of receivers
    subject: "Verification Code", // Subject line
    text: "Your confirmation code is 12345", // plain text body
    html: "<b>Your confirmation code is 12345</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);
