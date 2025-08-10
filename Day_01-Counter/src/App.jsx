import './App.css'
import { useState } from 'react'

function app(){
  const [Count,setCount]=useState(0);
  const counter=()=>{
    setCount(Count+1)
  }
  return (<>
  
    <div className="main-page">
  
<div className="content">
    <h1>{Count}</h1>
    <button onClick={counter}>Click</button>
  </div>
  
  <button className='reset' onClick={()=>setCount(0)}> reset</button>
    </div>


  </>
  )
}
export default app