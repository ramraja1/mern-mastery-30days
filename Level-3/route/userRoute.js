import { Router } from "express";
import { register,login } from "../controler/userControler.js";
const router=Router();


// POST /api/auth/signup →

router.post("/signup",register);

// POST /api/auth/login →

router.post("/login",login)


export default router;


