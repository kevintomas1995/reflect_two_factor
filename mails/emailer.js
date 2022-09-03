const nodemailer = require('nodemailer')

const host = 'localhost'
const port = 7777

const transporter = nodemailer.createTransport({
  host,
  port,
  secure: port === 456,
})

module.exports = transporter