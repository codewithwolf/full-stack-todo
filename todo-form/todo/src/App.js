import { useState, useEffect } from "react";
import Todo from "./Todo";

function App() {

  const getuser =()=>{
   fetch("/api/todo").then(res=> res.json()).then(json=> console.log(json))

  }
  useEffect(()=>{
    getuser()
  }, [])

  return (
    <Todo />
  );
}

export default App;
