import { createContext } from "react";
import {  useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});


const TodoItemsReducer = (currentTodoItems, action) => {
  let newTodoItems = currentTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      { todoName: action.payload.todoName, dueDate: action.payload.dueDate },
      ...currentTodoItems,
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = newTodoItems.filter(
      (item) => item.todoName !== action.payload.itemToBeDelete
    );
  }
  return newTodoItems;
};



const TodoItemsContextProvider = ({children})=>{
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
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemToBeDelete,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return  <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >{children}</TodoItemsContext.Provider>
}


export default TodoItemsContextProvider;
