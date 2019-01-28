const bcrypt = require('bcryptjs')

module.exports = {
  signup: async (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    const db = req.app.get('db');
    //first checks to see if a user already exists with the email
    let user = await db.find_user([ email ]);
    if(user[0]) {
      res.status(401).send({ loggedIn: false, message: 'Email already exists'});
    } else {
    //if no user already exists, hash the password and create a new row in users table for the user
      let salt = bcrypt.genSaltSync(10);
      let hash = bcrypt.hashSync( password, salt );
      let newUser = await db.new_user([ firstname, lastname, email, hash]);
      req.session.user = { email: newUser[0].email, id: newUser[0].id };
      res.status(200).send({ loggedIn: true, message: 'Signup a success!', id: newUser[0].id, firstname: newUser[0].firstname, lastname: newUser[0].lastname, email: newUser[0].email });
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    const db = req.app.get('db');
    let user = await db.find_user([ email ]);
    console.log("User: ", user);
    if(!user[0]) {
      res.status(401).send({ loggedIn: false, message: 'Email not found' });
    } else {
      let checkPassword = bcrypt.compareSync( password, user[0].password );
      if(checkPassword) {
        req.session.user = { email: user[0].email, id: user[0].id };
        return res.status(200).send({ loggedIn: true, message: 'Login Successful', id: user[0].id, firstname: user[0].firstname, lastname: user[0].lastname, email: user[0].email });
      } else {
        return res.status(401).send({ loggedIn: false, message: 'Incorrect Password'});
      }
    }
  }
}