var express = require('express');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport = ({
    service: 'gmail',

    auth: {
        user: '',
        password: '',
    }
});

var mailOptions = {
    from: '',
    to: '',
    subject: 'Invitation to connect (Hermes)',
    text: 'Message has been received'
}

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});
