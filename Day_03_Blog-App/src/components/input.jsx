import React, { useState } from 'react';

const Input = ({ addBlogs, onClose }) => {
  const [Title, setTitle] = useState("");
  const [Date, setDate] = useState("");
  const [Content, setContent] = useState("");

  const formHandler = (e) => {
    e.preventDefault();

    const value = { Title, Date, Content };
    addBlogs(value);
    setTitle("");
    setDate("");
    setContent("");
    onClose(); // close popup after adding
  };

  return (
    // Fullscreen semi-transparent background
    <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
      
      {/* Modal Box */}
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-lg">
        
        {/* Close Button */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Add New Blog</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 text-2xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form onSubmit={formHandler} className="flex flex-col gap-4">
          <input
            type="text"
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Title"
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          
          <input
            type="date"
            value={Date}
            onChange={(e) => setDate(e.target.value)}
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          
          <textarea
            value={Content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your content here"
            className="border p-2 rounded resize-none h-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Add Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default Input;
