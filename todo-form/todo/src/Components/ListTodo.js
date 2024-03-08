import React, { useState, useEffect } from "react";
import EditTodo from "./EditTodo";

const ListTodo = () => {
  const [todo, setTodo] = useState([]);

  const deleteTodo = async (id) => {
    const deleteTodo = await fetch(`http://localhost:4000/todos/${id}`, {
      method: "DELETE",
    });
    setTodo(todo.filter((todo) => todo.todo_id !== id));
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
