import mongoose from "mongoose";
const adminSchema = new mongoose.Schema({
   name:{
     type: String,
     required: true,
     trim: true
   },
   email:{
    type: String,
    required: true,
    trim: true
   },
   password:{
     type: String,
     required: true
   },
   contact:{
    type: Number,
    required: true,
    trim: true
   }

});

export const Admin = mongoose.model("admin",adminSchema);