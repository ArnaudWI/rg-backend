const mongoose = require('mongoose');

const smallgroupSchema = mongoose.Schema({
    discipline: String,
    date: String,
    hour: String,
    nbrParticipants: Number,
    price: String,
    programme: String,
    participantList: [{
      firstName: String,
      lastName: String,
      idUser: String
    }]
});

const smallgroupModel = mongoose.model('smallgroups', smallgroupSchema);

module.exports = smallgroupModel;
