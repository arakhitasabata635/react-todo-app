import { useContext } from "react";
import style from "./TodoItem.module.css"
import { RiChatDeleteFill } from "react-icons/ri";
import { TodoItemsContext } from "../store/Todo-items-store";


function TodoItem({ dueDate, todoName }) {
  const {deleteItem} = useContext(TodoItemsContext)
  return (
    <>
      <div className="row">
        <div className={`${style.div} col-4 `}> {todoName}</div>
        <div className={`${style.div} col-4 `}>{dueDate}</div>
        <div className="col-2">
          <button 
          type="button" 
          className="btn btn-danger"
          onClick={() => deleteItem(todoName)}
          >
            <RiChatDeleteFill />
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
