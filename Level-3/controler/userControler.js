import user from "../model/user.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


// 14. Signup Route
// POST /api/auth/signup →

// Check if email already exists

// Hash password with bcrypt

// Save user

// Return basic user data (not password).


export const register=async(req,res)=>{
    const {name,email,password}=req.body;

    if(!name||!email||!password){
        return res.status(400).send("All fields are required..");;

    }

    const userExists=await user.findOne({email});

    if(userExists)return res.status(409).send("User Already Exist...");

    const hashed=await bcrypt.hash(password,10);

    const data=await user.create({
        name,
        email,
        password:hashed
    });

    res.json({
        id:data._id,
        name:data.name,
        email:data.email
    });


};



// 15. Login Route (JWT)
// POST /api/auth/login →

// Check email & password

// If valid → return JWT token

// If invalid → 401 with message.

export const login=async(req,res)=>{
    const {email,password}=req.body;
    if(!email||!password)return res.status(400).json({message:"All field required"});
    const userData=await user.findOne({email});
    if(!userData)return res.status(401).json({message:"Invalid email or password"});
    const isMatch= await  bcrypt.compare(password,userData.password);
    if(!isMatch)return res.status(401).json({message:"Invalid email or password"});
    const token = jwt.sign(
        {id:userData._id},
        "PawanSeceret",
        {expiresIn:"1h"});

    res.json({
        token,
        user : {
            id:userData._id,
            name:userData.name,
            email:userData.email
        }
    }
    );


    

};