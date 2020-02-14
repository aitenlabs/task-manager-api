const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'aitenlabs@gmail.com',
        subject:  `ciao ${name}`,
        text: `ti sei iscritto correttamente.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'aitenlabs@gmail.com',
        subject: `${name}, il tuo account è stato rimosso`,
        text: `we will miss u ${name}`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}