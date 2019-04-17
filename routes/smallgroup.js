const express = require('express');
const router = express.Router();
const mongoose= require('mongoose');

// On crée notre propre module qui va nous servir à utiliser tous nos schemas et modèles dans plusieurs fichiers
const db = require('../config/db');

mongoose.connect(db.config.url, db.config.options, error => {
  if (!error) {
    console.info('SmallgroupsServer is running');
  } else {
    console.error(error);
  };
});

/* lecture de la bdd des smallgroups. */
router.get('/', (req, res) => {
  db.smallgroups.find (
      function (err, smallgroups) {
        res.json( smallgroups);
      })
});

module.exports = router;
