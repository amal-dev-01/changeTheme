
import './App.css';
import { useState } from 'react';
import './component/Btn.css'

const color2 = {
  backgroundColor: "#282c34",
  minHeight: "100vh",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "calc(10px + 2vmin)",
  color: "white"
};
const color1={
  backgroundColor:"white",
  minHeight: "100vh",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "calc(10px + 2vmin)",
  color: "black"
}

function App() {
  const [color,setColor]=useState(color1)
  const Change=()=>{
    if(color===color1){
    setColor(color2)
  }
  else{
    setColor(color1)
  }


  }

  return (
   <div style={color}>

   <button onClick={Change} className='btn'>Change Theme</button>
   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima,
    inventore tempora iusto impedit distinctio odit eos cumque. Minus blanditiis,
     perspiciatis doloremque porro explicabo quam assumenda quos sit distinctio aliquam fuga.</p>

   </div>
  );
}

export default App;
