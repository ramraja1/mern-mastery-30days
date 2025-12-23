import { Router } from "express";
import { createNotes,viewNotes,updateNotes } from "../controler/notesControler.js";

const router=Router();

router.post("/create",createNotes);
router.get("/view",viewNotes);
router.put("/update",updateNotes);

export default router;