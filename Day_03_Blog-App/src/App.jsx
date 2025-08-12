import Header from "./components/header"
import Input from "./components/input";
import "./App.css"
import { useState } from "react"
function App(){
  const [Value,setValue]=useState(false);
  
  const[blogs,setblogs]=useState([{
    title:"Gateway",
    date:"12/08/2025",
    content:"I am Pawan Tiwari No one  can stop me to becoming the richest man of my bloodline or you can say whole district "
  },
  {
    title:"Argusoft",
    date:"02/08/2025",
    content:"I am Pawan Tiwari No one  can stI I am the who are you looking foiro i am the creatorrichest man of my bloodline or you can say whole district "
  },
  {
    title:"Gateway",
    date:"12/08/2025",
    content:"I am Pawan Tiwari No one  can stop me to becoming the richest man of my bloodline or you can say whole district "
  },
  {
    title:"Gateway",
    date:"12/08/2025",
    content:"I am Pawan Tiwari No one  can stop me to becoming the richest man of my bloodline or you can say whole district "
  },
  {
    title:"Gateway",
    date:"12/08/2025",
    content:"I am Pawan Tiwari No one  can stop me to becoming the richest man of my bloodline or you can say whole district "
  },{
    title:"Gateway",
    date:"12/08/2025",
    content:"I am Pawan Tiwari No one  can stop me to becoming the richest man of my bloodline or you can say whole district "
  }
  ]);

  const addBlogs=(value)=>{
    console.log("Adding blog:", value); 
       setblogs((prevBlogs) => [...prevBlogs, {
    title: value.Title,
    date: value.Date,
    content: value.Content
  }]);
  }
  return(<>
    < Header   />
    <div className="content bg-blue-100 h-screen w-auto ">

      <button className="h-11 w-7xl bg-blue-300 my-6 mx-32 text-2xl font-semibold " onClick={()=>{setValue(!Value)}}>Add Blog + </button>
      {
        blogs.length > 0 ? (
        blogs.map((blog,index)=>(<div  key={index} className=" px-5 py-2 mx-1.5"> 
        <hr />
          <h1 className="py-2 font-semibold text-red-700 text-3xl ">{blog.title} - {blog.date}</h1>
          <p className="text-2xl ">{blog.content}</p>
        </div>))
        ): (<h1>NO Blog Available</h1>)
      }


    {  Value ? <Input addBlogs={addBlogs} onClose={() => setValue(false)} /> : null }
    </div>


  </>)

}

export default App