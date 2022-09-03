import nodemailer from 'nodemailer'

const host = 'localhost'
const port = 7777

const transporter = nodemailer.createTransport({
  host,
  port,
  secure: port === 465,
})


module.exports = transporter