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
    // Process a POST request
    const email = req.body.email;
    const password = req.body.password;

    if (email === "test@test.com" && password === "test") {
      res.status(200).json({ success: true });
      
      const info = await emailer.sendMail({
        from: '"Registration system" <reg@company.co>',
        to: email,
        subject: "Confirmation code",
        text: "Your confirmation code is 12345",
        html: "Your confirmation code is 12345",
      });
      return;
    } else {
      res.status(401).json({ success: false });
    }
  }
}
