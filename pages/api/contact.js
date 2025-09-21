import nodemailer from "nodemailer";

export default async function handler(req, res) {
    const {name, email, message} = req.body

    const transport = nodemailer.createTransport({
        service: 'gmail',
        secure: true,
        port: 465,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.APP_PASSWORD
        }
    })

    const mailOptions = {
        from: `"${name}" ${process.env.EMAIL}`,
        to: process.env.EMAIL,
        subject: `PORTFOLIO MAIL FROM: ${name}`,
        html: `
        Name: ${name} <br>
        Email: ${email} <br>
        Message: ${message} <br>
        `,
    }

    try {
        await transport.sendMail(mailOptions)
        res.status(200).end()
    } catch (e) {
        res.status(500).end()
    }


}
