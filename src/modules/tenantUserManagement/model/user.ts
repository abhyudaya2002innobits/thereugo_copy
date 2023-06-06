import mongoose from "mongoose"

var userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    imageUrl: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    contactNo: {
        type: String,
        required: false
    },
    isActive: {
        type: Boolean,
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
},
{
    timestamps: true
}
)

export const User = mongoose.model('User', userSchema);