const bcrypt = require('bcryptjs')

module.exports = {
  signup: async (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    const db = req.app.get('db');
    //first checks to see if a user already exists with the email
    let user = await db.find_user([email]);
    if (user[0]) {
      res.status(401).send({ loggedIn: false, message: 'Email already exists' });
    } else {
      //if no user already exists, hash the password and create a new row in users table for the user
      let salt = bcrypt.genSaltSync(10);
      let hash = bcrypt.hashSync(password, salt);
      let newUser = await db.new_user([firstname, lastname, email, hash]);
      req.session.user = { email: newUser[0].email, id: newUser[0].id };
      res.status(200).send({ loggedIn: true, message: 'Signup a success!', id: newUser[0].id, firstname: newUser[0].firstname, lastname: newUser[0].lastname, email: newUser[0].email });
    }
  },
  getAccounts: async (req, res) => {
      let db = req.app.get('db')
      if (req.session.user) {
        let accounts = await db.get_all_accounts(req.session.user.id)
        let balances = await db.get_account_balances([ req.session.user.id ])
        res.status(200).send({accounts, balances})
      } else {
          res.status(401).send('Please log in')
      }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    const db = req.app.get('db');
    let user = await db.find_user([ email ]);
    if(!user[0]) {
      res.status(401).send({ loggedIn: false, message: 'Email not found' });
    } else {
      let result = bcrypt.compareSync( password, user[0].password );
      if(result) {
        req.session.user = { email: user[0].email, id: user[0].id };
        return res.status(200).send({ loggedIn: true, message: 'Login Successful', id: user[0].id, firstname: user[0].firstname, lastname: user[0].lastname, email: user[0].email });
      } else {
        return res.status(401).send({ loggedIn: false, message: 'Incorrect Password'});
      }
    }
  },
  getSession: async (req, res) => {
    const db = req.app.get('db');
    if(req.session.user) {
      let user = await db.find_user([ req.session.user.email ]);
      return res.status(200).send({ loggedIn: true, message: 'User is logged in!', email: user[0].email, id: user[0].id, firstname: user[0].firstname, lastname: user[0].lastname })
    } else {
      return res.status(401).send({ loggedIn: false, message: "Please log in."})
    }
  },
  getAccountBalances: async(req,res)=>{
    const db=req.app.get('db')
    const user = req.session.user
    if(user){
      let allBalances = await db.lifetime_balances_graph([user.id])
      res.status(200).send(allBalances)
    } else{
      res.status(401).send(console.log('error no user info found'))
    }
  },
  logout: (req, res) => {
    req.session.destroy();
    res.status(200).send({ loggedIn: false });
  },
  newAccount: async (req, res) => {
    const {  name, currentBalance } = req.body
    const {id} = req.session.user
    const date = new Date();
    const db = req.app.get('db');
    //add new account
    let newAccount = await db.add_account([ id, name ]);
    // add first balance to the new account
    await db.add_balance([ newAccount[0].id, currentBalance, date ]);
    let response = await db.all_accounts( id );
    res.status(200).send({ response })
  },

  getAccountInfo: async (req,res)=>{
    const user = req.session.user
    const db = req.app.get('db')

    if(user){
      let accountInfo = await db.get_account_balances([user.id])
      res.status(200).send(accountInfo)
    } else {
      res.status(401).send(console.log('user not found please try again'))
    }
  },

  newBalance: async (req, res) => {
    const { accountid, newBalance, date } = req.body;
    const db = req.app.get('db');
    await db.add_balance([ accountid, newBalance, date ])
    let balances = await db.get_account_balances([ accountid ]);
    res.status(200).send(balances);
  },
  editBalance: async (req, res) => {
    const { id, date, balance } = req.body;
    const db = req.app.get('db');
    let newBalance = await db.update_balance([ id, balance, date ]);
    let balances = await db.get_account_balances([ newBalance[0].accountid ]);
    res.status(200).send(balances);
  },
  deleteBalance: async (req, res) => {
    const db = req.app.get('db');
    await db.delete_balance([ +req.params.id ]);
    if(req.session.user) {
    const { id } = req.session.user;
      let balances = await db.get_account_balances([ id ]);
      return res.status(200).send(balances);
    } else {
      return res.status(200).send('success deleting one balance!')
    }
  },
  deleteAccount: async (req, res) => {
    const db = req.app.get('db');
    await db.delete_account([ +req.params.id ]);
    if(req.session.user) {
      const { id } = req.session.user;
        let balances = await db.get_all_accounts([ id ]);
        return res.status(200).send(balances);
      } else {
        return res.status(200).send('success deleting account!')
      }
  },
  getMonthlyBalances: async (req, res) => {
    const { id } = req.params;
    const db = req.app.get('db');
    if(req.session.user) {
      let all_account_balances = await db.get_account_balances([ req.session.user.id ]);
      let single_account_balances = all_account_balances.filter(balance => balance.accountid === +id);
      res.status(200).send(single_account_balances);
    }
  },
  editName: async (req, res) => {
    const db = req.app.get('db');
    const { name, accountid } = req.body;
    let newName = await db.update_acct_name([ name, accountid ]);
    res.status(200).send(newName);
  },
  addSavingsAccount: async (req,res)=>{ //add a new savings account
    const db = req.app.get('db');
    const user = req.session.user
    const {name,endAmount,currentAmount,endDate} = req.body
    if(user){
      let newSavingsAccount = await db.add_goal([name,endAmount,currentAmount,endDate,user.id])
      res.status(200).send(newSavingsAccount)
    } else {
      res.status(401).send('No user found, please register or login')
    }
  },
  getSavingsAccounts: async(req,res)=>{ //get all savings accounts for the specified user
    const db = req.app.get('db')
    const user = req.session.user
    if(user){
      let getAllSavings = await db.get_users_savings_tables([user.id])
        res.status(200).send(getAllSavings)
    } else {
      res.status(401).send('No accounts found for this user.')
    }
  },
}

//need current balance on current account - userid, accountid, and a month back 
