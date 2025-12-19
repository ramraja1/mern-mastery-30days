import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    Title:{
        type:String,
        required:true,
        trim:true
    },
    Content:{
        type:String,
        
        required:true
    },
    CreatedAt:{
        type:Date,
        default:Date.now
    }

}

);

const Note=mongoose.model("Note",noteSchema);
export default Note;

