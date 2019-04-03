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

/* ajout d'une annonce. */
router.post('/add', (req, res) => {
  let newAnnonce = new db.annonces ({
    title: req.body.title,
    content: req.body.content,
    type: req.body.type,
    date: req.body.date,
  })

  newAnnonce.save(
    (error, annonce) => {
      console.log(annonce)
      res.json({ result: true, annonce });
    }
  );
});

/* mise à jour d'une annonce. */
router.post('/update', (req, res) => {
  db.annonces.findByIdAndUpdate(
    req.body._id,
  {
    title: req.body.title,
    content: req.body.content,
    type: req.body.type,
    date: req.body.date,
  }, {
    new: true
  }, function(error, annonce) {
    res.json({ result: true , annonce});
  });
});

/* suppression d'une annonce. */
router.post('/remove', (req, res) => {
  db.annonces.deleteOne(
    {_id: req.body._id},
    function(error){
      db.annonces.find(
        function(error, annonces){
          res.json({ result: true , annonces});
        }
      )
    }
  )
});

module.exports = router;
