import { useState } from "react";

function AddTodo({ onAddClick }) {
  const [todoName, settodoName] = useState("");
  const [dueDate, setdueDate] = useState("");

  const storeName = (e) => {
    settodoName(e.target.value);
  };
  const storeDueDate = (e) => {
    setdueDate(e.target.value);
  };

  const handelOnClick = () => {
    if (todoName && dueDate) {
      onAddClick(todoName, dueDate);
      settodoName("");
      setdueDate("");
    } else return;
  };

  return (
    <div className="row">
      <div className="col-4">
        <input
          value={todoName}
          onChange={storeName}
          type="text"
          placeholder="Enter TODO here"
        />
      </div>
      <div className="col-4">
        <input value={dueDate} onChange={storeDueDate} type="date" />
      </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-success"
          onClick={handelOnClick}
        >
          Add
        </button>
      </div>
    </div>
  );
}
export default AddTodo;
