import { useContext } from "react";
import { TodoItemsContext } from "../store/Todo-items-store";


function WelcomeMessage() {
   const {todoItems} = useContext(TodoItemsContext)
 
  return todoItems.length === 0 &&<p style={{
    fontSize: "25px",
    marginTop: "40px",
    fontWeight: "600",
  }}>Enjoy Your Day</p>;
}

export default WelcomeMessage;
