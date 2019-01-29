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
app.get('/accounts', ctrl.getAccounts)


app.listen(SERVER_PORT,()=>{
    console.log(`${SERVER_PORT} tiny robots doing your bidding.`)
})