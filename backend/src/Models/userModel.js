//user Schema

import mongoose from "mongoose";
import validator from "validatore";
import bcrypt from "bcrypt";
import crypto from "node:crypto";

const userSchema = new mongoose.Schema({
   name:{
    type:string,
    required: [true, "Please enter your name"],
    //
    trim: true,
    maxLength:[50, "your name can not be longer than 50 characters"]
   } 
})