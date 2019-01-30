require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const ctrl = require('./controller.js');

let {SERVER_PORT,CONNECTION_STRING,SESSION_SECRET} = process.env;

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

app.post('/auth/signup', ctrl.signup);
app.post('/auth/login', ctrl.login);
<<<<<<< HEAD
app.get('/auth/logout', ctrl.logout);
app.get('/getsession', ctrl.getSession);
app.get('/accounts', ctrl.getAccounts)
=======
app.get('/accounts', ctrl.getAccounts);
>>>>>>> 2236477a93ec02bb606e7440f47691e31ea3c8bd
app.post('/api/newaccount', ctrl.newAccount);
app.post('/api/newbalance', ctrl.newBalance);
app.put('/api/editbalance', ctrl.editBalance);


app.listen(SERVER_PORT,()=>{
    console.log(`${SERVER_PORT} tiny robots doing your bidding.`)
})