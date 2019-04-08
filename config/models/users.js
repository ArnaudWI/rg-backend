const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    lastName: String,
    firstName: String,
    email: String,
    password: String,
    token: String,
    admin: Boolean
});

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;
