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

var wodSchema = mongoose.Schema({
    name: String,
    wod: String,
    date: String
});

var wodModel = mongoose.model('wods', wodSchema);

/* création d'un wod (manuelle via postman). */
router.post('/addwod', (req, res) => {

    var newWod = new wodModel ({
      name: req.body.name,
      wod: req.body.wod,
      date: req.body.today
    })

    newWod.save(
      (error, wod) => {
        console.log(wod)
        res.json({ result: true, wod });
      }
    );
});

/* mise à jour du wod. */
router.put('/', (req, res) => {
  wodModel.findOneAndUpdate (
    {name: "wod"},
    {
      wod: req.body.wod,
      date: req.body.date
    }, {
      new: true
    }, function(error, wod) {
      console.log(wod)
      res.json({ result: true, wod });
    });
  });


module.exports = router;
