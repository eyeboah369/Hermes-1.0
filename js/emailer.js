const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport ({
    service: 'gmail',
    port: 8080,
    secure: true,
    auth: {
        type: 'OAuth2',
        host: 'eyeboah98@hotmail.com',
        password: 'yesterday1'
    }
});

const mailOptions = {
    from: 'eyeboah98@hotmail.com',
    to: 'eyeboah369@gmail.com',
    subject: 'Test email',
    html: '<p>Here is the link to the reverse shell </p>'
};

transporter.sendMail(mailOptions, function(err, info){
    if(err)
        console.log(err)
    
    else
        console.log(info);
    
});


