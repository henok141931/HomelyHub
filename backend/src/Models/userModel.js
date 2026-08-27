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
   } ,
email:{
type:string,
required:[true,"please enter email ID"],
unique:true,
lowercase:true,
trim:true,
validate:[validator.isEmail, "Please enter valid email"]


},

password:{
type:string,
required: [true,"Please enter  password"],
minlength:[6,"your password must be longer than 6 characters"],
select:false

},

passwordConfirm:{
   type:string,
   required:[true,"Please confirm your password"],
}



})
