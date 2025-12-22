import mongoose from "mongoose";

// 13. User Model
// Create User schema: name, email (unique), password.
// Add validation (required).
const userSchema= new mongoose.Schema({
    name:{type : String, required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,minlength:6}
})

const user=mongoose.model("user",userSchema);
export default user;