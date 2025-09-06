import TodoItem from "./TodoItem";

function TodoContainer({ todoItemList, handelDeletOnClick }) {
  return (
    <div className="todo-container">
      {todoItemList.map((item) => (
        <TodoItem
          key={item.todoName}
          dueDate={item.dueDate}
          todoName={item.todoName}
          handelDeletOnClick={handelDeletOnClick}
        ></TodoItem>
      ))}
    </div>
  );
}
export default TodoContainer;
