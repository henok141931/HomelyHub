import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from "./utils/db.js";

dotenv.config();

const app = express();

//express.json
app.use(express.json({limit:"100mb"}))

//urlencoded
app.use(express.urlencoded({limit:"100mb",extended:true}))

const PORT = process.env.PORT;
//cookie parser
app.use(cookieParser())

//one test route

app.get("/",(req,res)=>{
    res.send("Homely hub server is runnining");
})
connectDB();

app.listen(PORT,()=>{

    console.log(`App is running on port no: ${PORT}`);
})