import notes from "../model/note.js";
export const viewNotes = async (req, res) => {
   try{
        const data = await notes.find({userId:req.user.id});
        res.send(data);
   }
   catch(error){
        return res.status(500).json({message:"Something went wrong..",error:error});
   }
  

};

export const createNotes = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content)
      return res.status(400).json({ message: "All fields are required..." });

    const data = await notes.create({
      title,
      content,
      userId: req.user.id,
    });

    res.status(201).json({ message: "Notes created succesfully...",data:data });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong ..",
      error: error,
    });
  }
};

export const updateNotes=async (req,res)=>{
    const {title,content,id}=req.body;

    const check=await notes.findById(id);
    if(!check)return res.status(400).json({message:"this data is not available"});
    const data =await notes.findByIdAndUpdate(id,{title,content});
    res.send(data);
};
