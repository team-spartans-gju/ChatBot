import express from "express";
import multer from "multer";
import path from "path";
import Chatroom from "../models/chatRoom.model";
import { fileURLToPath } from "url";

const router = express.Router();


//create chat room
router.post("/", async (req, res) => {
    try {
        
    } catch (error) {
        
    }
});

// get all chat rooms
router.get("/", async (req, res) => {
    
});

//get room details
router.get("/:id", async (req, res) => {
    
});

//join room
router.post("/:id/join", async (req, res) => {
    
});

//leave room 
router.post("/:id/leave", async (req, res) => {
    
});

export default router;