//user Schema

import mongoose from "mongoose";
import validator from "validator";
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
   validate:{
      validator:function(el){
         return el ===this.password
      },
      message:"Passwords are not the same !"
   }
},
phoneNumber:{
   type:string,
   required:true,
   unique:true,
   trim:true
},

role:{
   type:string,
   enum:["user","admin"],
   default:"user"
},
avatar:{
   url:{ type:string},
   public_id:{type:string}
},
passwordChangedAt:{
   type:Date
},
passwordResetToken:{
type:string,
select:false,
index:true
},

passwordResetExpires:{
   type:string,
   select:false,
},


},
{
   timestamps:true
}

)

//settingsto not pass in response from server
userSchema.set("toJSON",{
   transform:function(doc,ret){
delete ret.password;
delete ret.passwordConfirm;
delete ret.passwordChangedAt;
delete ret.passwordResetExpires;
delete ret.__v;
return ret;

   }})
