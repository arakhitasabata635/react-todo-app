import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoContainer from "./components/TodoContainer";
import WelcomeMessage from "./components/welcomeMessage";
import "./style.css";

function App() {
  const [todoItemList, setTodoItemList] = useState([{todoName: "abh" , dueDate : "12"}]);

  const hendelAddOnClick = (todoName, dueDate) => {
    let newItemList = [...todoItemList, { todoName, dueDate }];
    setTodoItemList(newItemList);
  };

  const handelDeletOnClick = (itemToBeDelete) => {
    console.log(itemToBeDelete);
    let newItemList = todoItemList.filter((item) => item.todoName !== itemToBeDelete) ;
    setTodoItemList(newItemList);
  };

  return (
    <center className="todo-container" style={{ padding: "15px" }}>
      <h1 className="custom-heading">TODO App</h1>
      <AddTodo onAddClick={hendelAddOnClick} />
      {todoItemList.length === 0 && <WelcomeMessage />}
      <TodoContainer
        todoItemList={todoItemList}
        handelDeletOnClick={handelDeletOnClick}
      ></TodoContainer>
    </center>
  );
}

export default App;
