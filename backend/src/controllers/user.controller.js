import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { User } from "../models/users.model";
dotenv.config();

const SALT_ROUNDS = 10;


//register user
const registerUser = async(req, res) => {
    try {
        const { userName, password, profilePic, email} = req.body;

        if ( !userName || !email || !email || !profilePic) {
            return res.status(400).json({success:false, message: "all fields are required"});
        }
        
        const exists = await User.findOne({email: email.toLowerCase().trim()});

        if (exists) {
            return res.status(409).json({success:false, message: "this email already exists"});
        }

        const hashed = await bcrypt.hash(password, SALT_ROUNDS);

        const user = new User({
            userName,
            email: email.lowercase().trim(),
            password: hashed,
            profilePic
        });
        await user.save();
          return res.status(201).json({ success: true});
        }
        catch (error) {
        console.error("registerUser:", err);
        return res.staus(500).json({success: false, message: "server error"});
    }
};