require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const ctrl = require('./controller.js');
let {SERVER_PORT,CONNECTION_STRING,SESSION_SECRET, TEST_PASS} = process.env;

//Testing nodemailer
const nodemailer = require('nodemailer');
const ical = require('ical-generator');
const cal = ical();
const moment = require('moment');

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

let event = cal.createEvent().toString();
event.start = moment();
//nodemailer message
let HelperOptions = {
  from: '"Trassets" <thetester999999@gmail.com>',
  to: 'thetester999999@gmail.com',
  subject: 'Calendar invite',
  text: 'For best results, remember to update your balances often!',
  icalEvent: {
    content: event
  }
}
//I WILL TURN THIS BACK ON WHEN I AM WORKING ON IT AGAIN - COMMENTING OUT SO I DON'T GET EMAIL SPAM//
// transporter.sendMail(HelperOptions, (error, info) => {
//   if(error) {
//     return console.log("You have an error", error)
//   } else {
//     console.log("Message sent again?!", info, "Event: ", HelperOptions.icalEvent.content);
//   }
// })

//FYI for Meg, email says "unable to load event data"
// -------------------------------------------------------------------------------


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
//test

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
app.post(`/api/newsavings`,ctrl.addSavingsAccount); //add a new savings account to the db based on session user
app.get(`/api/savings`, ctrl.getSavingsAccounts); //get all savings accounts for the session user


app.listen(SERVER_PORT,()=>{
    console.log(`${SERVER_PORT} tiny snowbots doing your bidding.`)
})