import React, { useState } from "react";

const EditTodo = ({ todo, handle }) => {
  const [description, setDescription] = useState(todo.description);
  const [name, setName] = useState(false);
  const myButton = () => {
    setName(true);
  };
  console.log("===name==", name);
  //   const toggleModal = () => {
  //     console.log("name")
  //     setIsModalOpen(true);

  // };

  const updateTodo = async (e, id) => {
    e.preventDefault();
    

    try {
      const body = { description };

      const response = await fetch(
        `http://localhost:4000/todos/${todo.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      const finalRespons = await response.json();

      handle(finalRespons);
      setName(false);

      // window.location = "/";

      // const finalResponse = await response.json();

      // console.log("==a==", finalResponse);
      // setDescription(finalResponse);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        // data-target={`#id${todo.todo_id}`}
        onClick={myButton}
      >
        Edit
      </button>
      {name && (
        <div className="modal block">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 class="modal-title">Modal Heading</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <button
                className="btn btn-danger w-20"
                onClick={(e) => updateTodo(e)}
              >
                edit
              </button>

              <div className="modal-body">
                <input
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                  className="text-black"
                  value={description}
                />
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditTodo;
