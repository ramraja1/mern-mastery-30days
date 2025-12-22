import express from 'express';
import mongoose from 'mongoose';

import userRoute from "./route/userRoute.js"
const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Happy Coding....");
})

// 13. User Model
// Create User schema: name, email (unique), password.
// Add validation (required).


app.use("/api/auth",userRoute);

app.listen('5000',()=>{
        console.log("Server Connected...");
        mongoose.connect("mongodb://localhost:27017/Testing")
        .then(()=>console.log("mongoDB is Connected..."))
        .catch((err)=>console.error(err));
    });