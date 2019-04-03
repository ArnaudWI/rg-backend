const mongoose = require('mongoose');

const annonceSchema = mongoose.Schema({
    title: String,
    content: String,
    type: String,
    date: String
});

const annonceModel = mongoose.model('annonces', annonceSchema);

module.exports = annonceModel;
