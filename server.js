/**
 * Created by SavioJoseph on 8/23/2016.
 */
var express = require("express");
var app = express();
var path = require("path");
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();
var api_key = 'key-3cc777cdd1607022dec745caa3ceaef3';
var domain = 'sandbox829dd441b7644562b5e32cbc9b35c701.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
var bodyParser = require('body-parser');
app.use(express.static(__dirname + '/app'));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));


app.post('/sendEmail', function (req, res) {
    data = req.body;
    var data1 = {
        from: data.contactEmail,
        to: 'saviosam007@gmail.com',
        subject: 'Message From ' + data.contactName,
        text: data.contactMessage + ' Contact Number is: ' + data.contactPhone
    };
    mailgun.messages().send(data1, function (error, body) {
        console.log(body);
        res.json(data);
    });
});
//For avoidong Heroku $PORT error
app.get('/', function (request, response) {
    res.sendFile(path.join(__dirname + '/index.html'));
}).listen(app.get('port'), function () {
    console.log('App is running, server is listening on port ', app.get('port'));
});
console.log("Running on Port 5000");