import mongoose from "mongoose";
const brandSchema = new mongoose.Schema({
   

    brandId:{
        type:Number,
        require:true
    },
    brandName: {
        type: String,
         required:true
    }

});

export const Brand = mongoose.model("brand",brandSchema);