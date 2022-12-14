import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const email = req.body.email;
    const verificationCode = req.body.verificationCode;

    if (email === "test@test.com" && verificationCode === "12345") {
      res.status(200).json({ success: true });
    } else {
      res.status(401).json({ success: false });
    }
  }
}
