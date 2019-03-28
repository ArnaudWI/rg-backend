const express = require('express');
const router = express.Router();
const mongoose= require('mongoose');

// On crée notre propre module qui va nous servir à utiliser tous nos schemas et modèles dans plusieurs fichiers
const db = require('../config/db');


mongoose.connect(db.config.url, db.config.options, error => {
  if (!error) {
    console.info('WodServer is running');
  } else {
    console.error(error);
  };
});


/* création d'un wod (manuelle via postman). */
router.post('/addwod', (req, res) => {

    var newWod = new db.wods ({
      name: req.body.name,
      wod: req.body.wod,
      date: req.body.today
    })

    newWod.save(
      (error, wod) => {
        res.json({ result: true, wod });
      }
    );
});

/* mise à jour du wod. */
router.put('/', (req, res) => {
  db.wods.findOneAndUpdate (
    {name: "wod"},
    {
      wod: req.body.wod,
      date: req.body.date
    }, {
      new: true
    }, function(error, wod) {
      res.json({ result: true, wod });
    });
  });

  /* trouver et lire la bdd du wod. */
router.get('/read', (req, res) => {

    db.wods.findOne({
      name: "wod",
    },(error, wod) => {
      if (!wod) {
        res.json({ result: false});
      } else {
        res.json({ wod });
      }
    });
});

module.exports = router;
