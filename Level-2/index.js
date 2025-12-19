import express from 'express';
import mongoose from 'mongoose';
import note from './model/note.js'

const app= express();

app.use(express.json());
// 7. Connect to MongoDB
// Create a new project notes-api.

// Connect to local Mongo or Mongo Atlas with Mongoose

// Log “DB connected” on success.


mongoose.connect("mongodb://localhost:27017/Testing")
.then(()=>console.log("Mongo DB Connected.."))
.catch((err)=>{console.log(err)});


// 8. Note Model
// Create a Note schema with fields: title, content, createdAt.

// createdAt should auto default to Date.now.

//too create or add we ause app . post 
// 9. CRUD – Create & Read
// Routes:

// POST /api/notes → create note


// GET /api/notes → get all notes
// Validate: title and content required.


app.post("/api/notes",async (req,res)=>{
   const noteval= await note.create({Title:"am",Content:"zyx"});// hardcoded for quick testing, will replace with req.body

    res.status(201).json(noteval);
});
// app.get("/api/notes", async (req,res)=>{
   
//     const Fetched= await note.find({Title:"am"});
//     res.json(Fetched);

// })


// 10. CRUD – Update & Delete
// Routes:

// PUT /api/notes/:id → update note

// DELETE /api/notes/:id → delete note
// Handle: invalid id, not found.

app.put("/api/notes/:id",async (req,res)=>{
      const {id} = req.params;
      // 1. Validate ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid note ID" });
  }
  
    const updateNotes=await note.findByIdAndUpdate(id,{Title:"Pawan",Content:"xxx"});
    if(!updateNotes) return res.status(404).send("Not Found...");
    res.status(200).json(updateNotes);

})

app.delete("/api/notes/:id",async (req,res)=>{
    const {id}=req.params;
      // 1. Validate ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid note ID" });
  }
    
    const delNotes=await note.findByIdAndDelete(id);
    if(!delNotes) return res.status(404).send("Not Found...");
       res.status(200).json(delNotes);
})


// 11. Filter Notes
// Add query: GET /api/notes?search=xyz → return notes where title contains xyz (case-insensitive).
// Use $regex.

app.get("/api/notes",async (req,res)=>{
    const {search}=req.query;
let Filter={};

if(search){
    Filter.Title={$regex:search,$options:"i"};

}

    const notes=await note.find(Filter);
    res.status(200).send(notes);
})


// 12. Pagination
// Add pagination params: page and limit.
// Return notes, total, page, pages.


app.get('/',(req,res)=>{
    res.send("hii , I am alive...");
    
});


app.listen('5000',()=>{  
    console.log('Server Connected....');
});