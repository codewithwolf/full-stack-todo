import React, { useState, useEffect } from "react";
import EditTodo from "./EditTodo";

const ListTodo = ({ todo, handleClick, handle }) => {
  const [name, setName] = useState(false);

  const button = () => {
    setName(true);
  };

  // Delete Api

  const deleteTodo = async (id) => {
    const deleteTodo = await fetch(`http://localhost:4000/todos/${id}`, {
      method: "DELETE",
    });

    const item = todo.filter((todo) => todo.todo_id !== id);

    console.log();

    // data sending child to parent
    handleClick(item);
  };

  return (
  
  
  <>

    <div>
      <table className=" ml-48">
        <tr className="">
          <th className="">DEscription</th>
        </tr>
        {todo.map((todo) => (
          <tr className="" key={todo.todo_id}>
            <div className=" flex mt-4">
              <td>{todo.description}</td>
              <td onClick={button} className="btn btn-primary">
                <EditTodo todo={todo} handle={handle} />
              </td>
              <td
                className="btn btn-danger ml-4"
                onClick={() => deleteTodo(todo.todo_id)}
              >
                delete
              </td>
            </div>
          </tr>
        ))}
      </table>
    </div>


    {/* {
      todo.map((todo)=>(
        <div>
          {todo.description}
        </div>
      ))
    } */}
    </>
  );
};

export default ListTodo  

// like that i am done with my work and please share with someone and we will try to do something and else is thiis love maine na jana maine na jana ha ha ha h a kahi na lage man
