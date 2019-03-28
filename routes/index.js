const express = require('express');
const router = express.Router();
const mongoose= require('mongoose');

// On crée notre propre module qui va nous servir à utiliser tous nos schemas et modèles dans plusieurs fichiers
const db = require('../config/db');

mongoose.connect(db.config.url, db.config.options, error => {
  if (!error) {
    console.info('Server is running');
  } else {
    console.error(error);
  };
});


/* création d'un utilisateur. */
router.post('/signup', (req, res) => {
  if (req.body.lastName !== '' && req.body.firstName !== '' &&
  req.body.email !== '' && req.body.password !== '') {
    var newUser = new db.users ({
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

    db.users.findOne({
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
