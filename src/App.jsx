import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoContainer from "./components/TodoContainer";
import WelcomeMessage from "./components/welcomeMessage";
import "./style.css";
import { TodoItemsContext } from "./store/Todo-items-store";

function App() {
  const [todoItems, setTodoItemList] = useState([]);

  const addNewItem = (todoName, dueDate) => {
    setTodoItemList((currentVal) => [{ todoName, dueDate }, ...currentVal]);
  };

  const deleteItem = (itemToBeDelete) => {
    let newItemList = todoItems.filter(
      (item) => item.todoName !== itemToBeDelete
    );
    setTodoItemList(newItemList);
  };

  return (
    <TodoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
      <center className="todo-container" style={{ padding: "15px" }}>
        <h1 className="custom-heading">TODO App</h1>
        <AddTodo  />
        {todoItems.length === 0 && <WelcomeMessage />}
        <TodoContainer></TodoContainer>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
