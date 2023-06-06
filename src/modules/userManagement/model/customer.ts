import mongoose from "mongoose"

var customerSchema = new mongoose.Schema({

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
    subscriptionStatus: {
        type: Boolean,
        required: true,
        default: false
    },
    registeredWith: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: false
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
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

export const Customer = mongoose.model('customer', customerSchema);