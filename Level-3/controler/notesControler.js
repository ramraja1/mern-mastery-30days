import notes from "../model/note.js";
export const viewNotes = async (req, res) => {
  const data = await notes.findById();
};

export const createNotes = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content)
      return res.status(404).json({ message: "All fields are required..." });

    const data = await notes.create({
      title,
      content,
      userId: req.user.id,
    });

    res.status(200).json({ message: "Notes created succesfully..." });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong ..",
      error: error,
    });
  }
};
