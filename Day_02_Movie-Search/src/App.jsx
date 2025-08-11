import {useState} from 'react'
import axios from 'axios'
import "./App.css"
function App(){
  const[Input,setInput]=useState("");
const[Movie,setMovie]=useState([]);
  const changeHandler= async (e)=>{
   
    setInput(e.target.value);
   
  }
  const searchMovie= async ()=>{

    const res=await axios.get('http://www.omdbapi.com/',{
      params:{
        apikey:"bea003af",
        s:Input
      }
    })
    setMovie(res.data.Search || []);
    setInput("");
  }
  return(<>
    
    <div className="main">

      <div className="searchbar">
        <input type="text" onChange={changeHandler} placeholder='Enter Movie Name to Search' className='inp'/>
        <button onClick={searchMovie} className='btn'>Search</button>


      </div>

      <div className="content">
      {
        Movie.length > 0 ? (
          Movie.map((movie,index)=>(
            <div className="cards index" key={index}>
              <img src={movie.Poster} alt={movie.Title} />
              <h1>
                {movie.Title} ({movie.Year})</h1>

                <h3> </h3>
            </div>
            
           
          ))
        ):(
          <h1>not found </h1>
        )
      }
       

      </div>
    </div>
  </>)
}

export default App