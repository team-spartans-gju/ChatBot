import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: "*",
    credentials: true
}));

app.use(express.json({limit : "20Kb"}));
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(cookieParser());

//import Route



//Declare Route




export {app}

