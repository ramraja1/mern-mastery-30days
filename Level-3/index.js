import express from 'express';
import mongoose from 'mongoose';
import {authMiddleware} from './middleware/authMiddleware.js'
import noteRoutes from './route/notesRoutes.js'

import userRoute from "./route/userRoute.js"
const app=express();

app.use(express.json());



// 13. User Model
// Create User schema: name, email (unique), password.
// Add validation (required).


app.use("/api/auth",userRoute);

// 16. Auth Middleware
// Create authMiddleware that:

// Reads Authorization: Bearer <token>

// Verifies token

// Sets req.user with user id/email.
app.get("/",authMiddleware,(req,res)=>{
    res.send("Happy Coding....");
})

// 17. Protected Notes Routes
// Modify notes API so:

// Each note belongs to a user (userId)

// Only logged-in user can create/read/update/delete their own notes.

app.use("/api/notes",authMiddleware,noteRoutes);

app.listen('5000',()=>{
        console.log("Server Connected...");
        mongoose.connect("mongodb://localhost:27017/Testing")
        .then(()=>console.log("mongoDB is Connected..."))
        .catch((err)=>console.error(err));
    });