import mongoose from "mongoose";

const notesSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId ,
         ref:"user",
         required:true
        },
    createdAt:{
        type:Date,
        default:Date.now
    }

});

const notes=mongoose.model("notes",notesSchema);

export default notes;