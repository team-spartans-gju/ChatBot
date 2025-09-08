import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: string,
        required: true,
    },
    profilePic: {
        type: string,
    },
    isOnline: {
        type: Boolean,
        default: false,
    },
    lastSeen: {
        type: Date,
    },
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // List of friends for user
    createdAt: {
        type: Date,
        default: Date.now,
    },
});



export const User = mongoose.model('user', userSchema);
