import React from "react";
import {useEffect , useState} from 'react'

function App() {

  const [windowWidth , setWindowWidth] = useState(window.innerWidth);
  const [name , setName] = useState("");

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth)
  }
  //On every render when the screen is resize
  useEffect(() => {
    window.addEventListener("resize" , updateWindowWidth);
    console.log("re-rendered");
  });

  //Only renders one time 
  useEffect(() => {
    console.log("Component mounted")
  }, )
    //this will run everytime the name variable changes . Dependency array
   useEffect(() => {
    console.log(name);

    return () => {
      //cleanup
      console.log("unmounted");
    }
   }, [name]);






  return (
    <div className="App">
      <h1>UseEffect hook</h1>
      <h2>The window widthh is:{windowWidth}</h2>
      <input 
      placeholder = "Enter Name"
      value = {name}
      onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default App;
