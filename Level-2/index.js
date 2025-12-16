import express from 'express';
import mongoose from 'mongoose';


const app= express();


// 7. Connect to MongoDB
// Create a new project notes-api.

// Connect to local Mongo or Mongo Atlas with Mongoose

// Log “DB connected” on success.

mongoose.connect("mongodb://localhost:27017/Testing")
.then(console.log("Mongo DB Connected.."))
.catch((err)=>{console.log(err)});



app.get('/',(req,res)=>{
    res.send("hii , I am alive...");
});


app.listen('5000',()=>{
    
    console.log('Server Connected....');
});