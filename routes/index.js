const express = require('express');
const router = express.Router();
const mongoose= require('mongoose');


var options = { server: { socketOptions: {connectTimeoutMS: 5000, useNewUrlParser: true } }};
mongoose.connect('mongodb://nono:mongodb69@ds119996.mlab.com:19996/ringside-user',
    options,
    function(err) {
     console.log(err);
    }
);

var userSchema = mongoose.Schema({
    lastName: String,
    firstName: String,
    email: String,
    password: String,
    admin: Boolean
});

var userModel = mongoose.model('users', userSchema);

/* création d'un utilisateur. */
router.post('/signup', (req, res) => {
  if (req.body.lastName !== '' && req.body.firstName !== '' &&
  req.body.email !== '' && req.body.password !== '') {
    var newUser = new userModel ({
      lastName: req.body.lastName,
      firstName: req.body.firstName,
      email: req.body.email,
      password: req.body.password,
      admin: true
    })

    newUser.save(
      (error, user) => {
        console.log(user)
        res.json({ result: true, user });
      }
    );
  } else {
    console.log('error')
    res.json({ result: false, error: 'Incorrect data'});
  }
});

/* connexion à l'app. */
router.get('/signin', (req, res) => {

    userModel.findOne({
      email: req.query.email,
      password: req.query.password
    },(error, user) => {
      if (!user) {
        res.json({ result: false, isUserExist: false});
      } else {
        res.json({ result: true, isUserExist: true, user });
      }
    });
});

module.exports = router;
