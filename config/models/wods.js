const mongoose = require('mongoose');

const wodSchema = mongoose.Schema({
    name: String,
    wod: String,
    date: String
});

const wodModel = mongoose.model('wods', wodSchema);

module.exports = wodModel;
