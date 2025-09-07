import { useState, useReducer } from "react";
import AddTodo from "./components/AddTodo";
import TodoContainer from "./components/TodoContainer";
import WelcomeMessage from "./components/welcomeMessage";
import "./style.css";
import { TodoItemsContext } from "./store/Todo-items-store";

const TodoItemsReducer = (currentTodoItems, action) => {
  let newTodoItems = currentTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      { todoName: action.payload.todoName, dueDate: action.payload.dueDate },
      ...currentTodoItems,
    ];
  } else if (action.type === "DELETE_ITEM") {
  }
  return newTodoItems;
};

function App() {
  //  const [todoItems, setTodoItemList] = useState([]);

  const [todoItems, dispatchTodoItems] = useReducer(TodoItemsReducer, []);

  const addNewItem = (todoName, dueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
       todoName,
        dueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (itemToBeDelete) => {
    let newItemList = todoItems.filter(
      (item) => item.todoName !== itemToBeDelete
    );
    setTodoItemList(newItemList);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="todo-container" style={{ padding: "15px" }}>
        <h1 className="custom-heading">TODO App</h1>
        <AddTodo />
        {todoItems.length === 0 && <WelcomeMessage />}
        <TodoContainer></TodoContainer>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
