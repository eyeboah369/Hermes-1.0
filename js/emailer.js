var express = require('express');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport = ({
    service: 'gmail',

    auth: {
        user: 'eyeboahcw@gmail.com',
        password: 'classwish',
    }
});

var mailOptions = {
    from: 'eyeboahcw@gmail.com',
    to: 'eyeboah369@gmail.com',
    subject: 'Invitation to connect (Hermes)',
    text: 'Message has been received'
}

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});