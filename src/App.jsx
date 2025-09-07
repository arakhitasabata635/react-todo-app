
import AddTodo from "./components/AddTodo";
import TodoContainer from "./components/TodoContainer";
import WelcomeMessage from "./components/welcomeMessage";
import "./style.css";
import TodoItemsContextProvider, { TodoItemsContext } from "./store/Todo-items-store";



function App() {

  
  return (
   <TodoItemsContextProvider>
      <center className="todo-container" style={{ padding: "15px" }}>
        <h1 className="custom-heading">TODO App</h1>
        <AddTodo />
         <WelcomeMessage />
        <TodoContainer></TodoContainer>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
