const bcrypt = require('bcryptjs')

module.exports = {
  signup: async (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    const db = req.app.get('db');
    console.log(req.body);
    //first checks to see if a user already exists with the email
    let user = await db.find_user([email]);
    if (user[0]) {
      res.status(401).send({ loggedIn: false, message: 'Email already exists' });
    } else {
      //if no user already exists, hash the password and create a new row in users table for the user
      let salt = bcrypt.genSaltSync(10);
      let hash = bcrypt.hashSync(password, salt);
      let newUser = await db.new_user([firstname, lastname, email, hash]);
      console.log("New User", newUser);
      req.session.user = { email: newUser[0].email, id: newUser[0].id };
      res.status(200).send({ loggedIn: true, message: 'Signup a success!', id: newUser[0].id, firstname: newUser[0].firstname, lastname: newUser[0].lastname, email: newUser[0].email });
    }
  },
  getAccounts: async (req, res) => {
      let db = req.app.get('db')
      if (req.session.user) {
        let accounts = await db.get_all_accounts(req.session.user.id)
        console.log(req.session.user)
        res.status(200).send(accounts)
      } else {
          res.status(401).send('Please log in')
      }
  },
}