const express = require('express');
const router = express.Router();
const mongoose= require('mongoose');

// On crée notre propre module qui va nous servir à utiliser tous nos schemas et modèles dans plusieurs fichiers
const db = require('../config/db');

mongoose.connect(db.config.url, db.config.options, error => {
  if (!error) {
    console.info('RdvtrainingsServer is running');
  } else {
    console.error(error);
  };
});

/* lecture de la bdd des rdvtrainings. */
router.get('/', (req, res) => {
  db.rdvtrainings.find (
      function (err, rdvtrainings) {
        res.json( rdvtrainings);
      })
});

module.exports = router;
