import mongoose from "mongoose";
const laptopSchema = new mongoose.Schema({
    id: {
        type: Number,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    rent: {
        type: Number,
        require: true,
    },
    rentDuration: {
        type: Number,
        require: true,
    },
    brandName: {
        type: String,
        require: true,
    },
    processor: {
        type: String,
        require: true,
    },
    ram:{
        type:String,
        require:true
    },
    storagetype:{
        type:String,
        require:true
    },
    opartingsystem:{
        type: String,
        require:true
    },
    image: {
        type: String,
        require: true
    } 
});

export const Laptop = mongoose.model("laptop",laptopSchema);