const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const UserSchema = new Schema({
    id: Number,
    name: String,
    password:String,
    username:String,
    email: String
},
{
    timestamps: true
});



module.exports = mongoose.model("User", UserSchema);