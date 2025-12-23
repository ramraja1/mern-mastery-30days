import { Router } from "express";
import { createNotes,viewNotes } from "../controler/notesControler.js";

const router=Router();

router.post("/create",createNotes);
router.get("/view",viewNotes)

export default router;