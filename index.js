const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "okeowoolasunkanmi007@gmail.com",
    pass: "gmail password",
  },
});

async function sendEmail() {
    const mailOptions = {
      from: {
        name: "Olasunkanmi",
        address: "okeowoolasunkanmi007@gmail.com",
      },
      to: "omoniyiveronicateniola@gmail.com",
      subject: "Email test",
    //   html: 'Email with embedded image: <img src="cid:unique_identifier@domain.com"/>',
      attachments: [
        {
          filename: "attachment_1.txt",
          content: "Hello user, this is a text file!",
        },
        {
          filename: "attachment_2.pdf",
          path: __dirname + "/attachments/output.pdf",
        //   cid: "unique_identifier@domain.com",
        },
      ],
    };

    transport.sendMail(mailOptions, (err, info) => {
        if(err) {
            return console.log(`Error: ${err}`)
        }
        return console.log(`Email sent successfully. Info:${JSON.stringify(info)}`)
    })
}

sendEmail()