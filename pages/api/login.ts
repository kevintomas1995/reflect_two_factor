import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  success: boolean
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    // Process a POST request
    const username = req.body.username
    const password = req.body.password

    if (username === "test" && password === "test") {
      res.status(200).json({ success: true })
    } else {
      res.status(401).json({ success: false })
    }
  }
}
