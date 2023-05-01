import mongoose from "mongoose"

var userSchema = new mongoose.Schema({
    id: String,
    email: String,
    name: String,
    facebookToken: String,
    gender: String,
    pic: String,
    username: String,
    password: String,
    token: String
})

export const User = mongoose.model('User', userSchema);