import style from "./TodoItem.module.css"

function TodoItem({ dueDate, todoName, handelDeletOnClick }) {
  return (
    <>
      <div className="row">
        <div className={`${style.div} col-4 `}> {todoName}</div>
        <div className={`${style.div} col-4 `}>{dueDate}</div>
        <div className="col-2">
          <button 
          type="button" 
          className="btn btn-danger"
          onClick={() => handelDeletOnClick(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
