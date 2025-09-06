import { useContext, useRef } from "react";
import { TodoItemsContext } from "../store/Todo-items-store";
import { BiSolidCommentAdd } from "react-icons/bi";

function AddTodo() {

  const {addNewItem} = useContext(TodoItemsContext)

  const todoNameElement = useRef("");
  const dueDatElement = useRef("");

  const handelFormSubmit = (e) => {
    e.preventDefault();
    let todoName = todoNameElement.current.value;
    let dueDate = dueDatElement.current.value;
    if (todoName && dueDate) {
      addNewItem(todoName, dueDate);
      todoNameElement.current.value = "";
      dueDatElement.current.value = "";
    } else return;
  };

  return (
    <form onSubmit={handelFormSubmit} className="row">
      <div className="col-4">
        <input
          ref={todoNameElement}
          type="text"
          placeholder="Enter TODO here"
        />
      </div>
      <div className="col-4">
        <input ref={dueDatElement} type="date" />
      </div>
      <div className="col-2">
        <button type="submit" className="btn btn-success">
          <BiSolidCommentAdd />
        </button>
      </div>
    </form>
  );
}
export default AddTodo;
