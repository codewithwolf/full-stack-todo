import React, { useState } from "react";

const EditTodo = ({ todo}) => {
  const [description, setDescription] = useState(todo.description);
  const updateTodo = async (e)=>{
    
    e.preventDefault();
    try {
      const body = {description};
        
      
      const response = await fetch(`http://localhost:4000/todos/${todo.todo_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
   
      const finalResponse = await response.json();
      

      


      window.location = "/";

      
      // const finalResponse = await response.json();
    
      // console.log("==a==", finalResponse);
      // setDescription(finalResponse);
      
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>

      <div className="modal" id={`id${todo.todo_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 class="modal-title">Modal Heading</h4>
              <button type="button" className="close" data-dismiss="modal">
              edit
                &times;
              </button>
            </div>
            <button className="btn btn-danger" onClick={ e => updateTodo(e)}>edit</button>
            <div className="modal-body">
              <input type="text" onChange={(e) => setDescription(e.target.value)} className="text-black" value={description} />
            </div>

            <div className="modal-footer"></div>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default EditTodo;
