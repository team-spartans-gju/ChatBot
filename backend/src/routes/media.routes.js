import express from "express";
import Media from "../models/media.model";
import multer from "multer";
import path from "path";

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, res, cb) => {
         cb(null, Date.now() + path.extname(file.originalName));
    }
});

const upload = multer({storage});

router.post("/upload", async (req, res) => {
    try {
        
    } catch (error) {
        
    }
});

export default router;