const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UserSchema = new schema({
    email: String,
    password: String
});
const user = mongoose.model('User', UserSchema);

module.exports = user;