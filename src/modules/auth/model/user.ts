import mongoose from "mongoose"

var userSchema = new mongoose.Schema({

    token: {
        type: String,
        required: false
    },
    fullName: {
        type: String,
        required: true
    },
    pic: {
        type: String,
        required: false
    },
    isGuest: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    tenantId: {
        type: String,
        required: false
    },
    roleName: {
        type: String,
        required: false
    },
    isApplication: {
        type: Boolean,
        required: false
    },
    registeredWith: {
        type: String,
        required: true
    },
    createdBy: {
        type: String,
        required: false
    },
    updatedBy: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        required: false
    },
    updatedAt: {
        type: Date,
        required: false
    },
    deletedAt: {
        type: Date,
        required: false
    },
})

export const User = mongoose.model('User', userSchema);