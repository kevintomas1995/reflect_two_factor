import type { NextApiRequest, NextApiResponse } from "next";
import emailer from "../../mails/emailer";

type Data = {
  success: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const email = req.body.email;
    const password = req.body.password;

    // hard coded verfication code for demo
    const verificationCode = "12345";

    if (email === "test@test.com" && password === "test") {
      res.status(200).json({ success: true });

      const info = await emailer.sendMail({
        from: '"Registration system" <reg@company.co>',
        to: email,
        subject: "Confirmation link",
        text: `http://localhost:3000/verification?email=${email}&verificationCode=${verificationCode}`,
        html: `http://localhost:3000/verification?email=${email}&verificationCode=${verificationCode}`,
      });
      return;
    } else {
      res.status(401).json({ success: false });
    }
  }
}
