require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const ctrl = require('./controller.js');
let {SERVER_PORT,CONNECTION_STRING,SESSION_SECRET, TEST_PASS} = process.env;

//nodemailer and ical calendar events
const nodemailer = require('nodemailer');
const ical = require('ical-generator');
const cal = ical();
const moment = require('moment');

cal.createEvent({
  start: new Date(),
  end: moment(new Date()).add(1, 'hour'),
  summary: 'Update Trasset Balances',
  organizer: 'Trassets <thetester999999@gmail.com>',
});

let content = cal.toString(); //generates ical string for the ical event

const app = express();

app.use(express.json());

app.use(express.static(__dirname+'/../build'))
app.use(session({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET
}))

massive(CONNECTION_STRING).then(db=>{
    app.set('db',db)
    console.log(`db connected using massive`)
}) 

//Nodemailer reminder
app.post('/sendemail', function(req, res) {
  const { email } = req.body;
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
      user: 'thetester999999@gmail.com',
      pass: TEST_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  })
  //email message 
  let message = {
    from: '"Trassets" <thetester999999@gmail.com>',
    to: `${email}`,
    subject: 'Calendar Reminder',
    text: 'For best results, add this as a repeating event to your calendar to help you remember to update your balances often!',
    icalEvent: {
      content: content
    }
  }
  transporter.sendMail(message, (error, info) => {
    if(error) {
      return console.log(error)
    }
  })
  res.status(200).send('Message Sent!')
});

app.post('/auth/signup', ctrl.signup);
app.post('/auth/login', ctrl.login);
app.get('/auth/logout', ctrl.logout);
app.get('/getsession', ctrl.getSession);
app.get('/accounts', ctrl.getAccounts);
app.get(`/api/getbalances`,ctrl.getAccountBalances);
app.post('/api/newaccount', ctrl.newAccount);
app.post('/api/newbalance', ctrl.newBalance);
app.put('/api/editbalance', ctrl.editBalance);
app.delete('/api/deletebalance/:id', ctrl.deleteBalance);
app.delete('/api/deleteaccount/:id', ctrl.deleteAccount);
app.get('/getmonthlybalances/:id', ctrl.getMonthlyBalances); //for the monthly changes function
app.put('/api/editname', ctrl.editName); //in accountComponent for editing account names
app.post(`/api/savings`,ctrl.addSavingsAccount); //add a new savings account to the db based on session user

app.listen(SERVER_PORT,()=>{
    console.log(`${SERVER_PORT} tiny snowbots doing your bidding.`)
})