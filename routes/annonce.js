const express = require('express');
const router = express.Router();
const mongoose= require('mongoose');

// On crée notre propre module qui va nous servir à utiliser tous nos schemas et modèles dans plusieurs fichiers
const db = require('../config/db');

mongoose.connect(db.config.url, db.config.options, error => {
  if (!error) {
    console.info('AnnonceServer is running');
  } else {
    console.error(error);
  };
});

/* lecture de la bdd des annonces. */
router.get('/', (req, res) => {
  db.annonces.find (
      function (err, annonces) {
        res.json( annonces);
      })
});


module.exports = router;
