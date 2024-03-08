import React, { useEffect, useState } from "react";
import ListTodo from "./ListTodo";

const UpdateTodo = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  
  const handleClick = (item) => {
    // Some data you want to send to the parent
     setTodo(item);

    
    // Call the callback function provided by the parent with the data
    
  };

  

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:4000/todos");
      const jsonData = await response.json();
      setTodo(jsonData);
    } catch (error) {
      console.log(error.message);
    }
  };


  useEffect(() => {
    getTodos();
  }, []);


  const handleChange = async (e) => {
    e.preventDefault();
    try {
      const body = JSON.stringify({
        description: input,
      });
      console.log(body);

      const response = await fetch("http://localhost:4000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
      });
      const finalResponse= await response.json();
      const updatedTodo = [...todo,finalResponse];
      console.log("==a==",finalResponse);
      setTodo(updatedTodo)
      console.log(response)

    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className=" flex mt-7">
        <div className=" flex justify-around items-center">
          <div className=" bg-slate-800 w-[600px] h-[500px] my-3">
            <h1 className=" text-2xl text-center mt-7 text-white font-bold">
              To <span className=" text-green-300">DoList</span>{" "}
            </h1>
            <form
              className=" items-center justify-center my-20 ml-20 "
              action=""
              onSubmit={handleChange}
            >
              <div className=" py-5  ">
                <h2 className=" text-white">My Todo :</h2>
                <input
                  className=" mt-6 bg-slate-300 border-blue-200   h-12 w-[400px]"
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
              </div>

              <button
                className=" border-y-emerald-300 rounded-lg border-2 p-1 w-28 hover:bg-black cursor-pointer text-white"
                type="submit"
              >
                Add list
              </button>
            </form>
          </div>
        </div>

        <ListTodo todo={todo} handleClick={handleClick} />
      </div>
    </>
  );
};

export default UpdateTodo;
