const mongoose = require('mongoose');

const rdvtrainingSchema = mongoose.Schema({
    discipline: String,
    date: String,
    auteur: String,
    content: String,
    responseList: [{
      responseAuteur: String,
      responseContent: String,
    }]
});

const rdvtrainingModel = mongoose.model('rdvtrainings', rdvtrainingSchema);

module.exports = rdvtrainingModel;
