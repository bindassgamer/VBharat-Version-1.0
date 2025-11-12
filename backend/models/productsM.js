import mongoose from "mongoose";
import categoryM from "./categoryM.js";
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    slug:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:categoryM,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    photo:{
        data:Buffer,
        contentType:String,
    },
    status:{
        type:String,
        default:"available",
    }
},{timestamps:true})


export default mongoose.model('Products',productSchema)