import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/Todo-items-store";

function TodoContainer() {
  const {todoItems} = useContext(TodoItemsContext);
  

  return (
    <div className="todo-container">
      {todoItems.map((item) => (
        <TodoItem
          key={item.todoName}
          dueDate={item.dueDate}
          todoName={item.todoName}
        ></TodoItem>
      ))}
    </div>
  );
}
export default TodoContainer;
