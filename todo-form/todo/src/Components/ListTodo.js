import React, { useState, useEffect } from "react";
import EditTodo from "./EditTodo";

const ListTodo = ({todo, handleClick}) => {

  const deleteTodo = async (id) => {
    const deleteTodo = await fetch(`http://localhost:4000/todos/${id}`, {
      method: "DELETE",
    });

    const item = todo.filter((todo) => todo.todo_id !== id);

     
     handleClick(item);
  };



  return (
    <div>
      <table className=" ml-48">
        <tr className="">
          <th className=" ml-44">DEscription</th>
        </tr>
        {todo.map((todo) => (
          <tr className="" key={todo.todo_id}>
            <div className=" flex mt-4">
              <td>{todo.description}</td>
              <td className="btn btn-success ml-24"><EditTodo todo={todo} /></td>
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
  );
};

export default ListTodo;
