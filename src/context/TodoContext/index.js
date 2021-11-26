import { useState, createContext } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext();
const TodoProvider = ({ children }) => {
  const todoListDefault = [
    {
      id: 1,
      text: "Cortar Cebolla",
      completed: true,
    },
    {
      id: 2,
      text: "Tomar el curso de react",
      completed: true,
    },
    {
      id: 3,
      text: "Llorar con la cebolla",
      completed: false,
    },
    {
      id: 4,
      text: "I told you long ago, on the road I got what they waitin' for",
      completed: false,
    },
  ];
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const {
    error,
    item: todoList,
    saveItem: setTodoList,
    loading,
  } = useLocalStorage("TODO_V1", []);
  const todoCompleted = todoList.filter((todo) => !!todo.completed).length;
  const todoTotal = todoList.length;
  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = todoList;
  } else {
    searchedTodos = todoList.filter((todo) => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
    });
  }
  const onComplete = (id) => {
    const index = todoList.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      const todo = todoList[index];
      const newTodoList = [...todoList];
      todo.completed = !todo.completed;
      newTodoList[index] = todo;
      setTodoList(newTodoList);
    }
  };
  const onDelete = (id) => {
    const index = todoList.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      const newTodoList = [...todoList];
      newTodoList.splice(index, 1);
      setTodoList(newTodoList);
    }
  };
  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        searchValue,
        setSearchValue,
        searchedTodos,
        todoCompleted,
        todoTotal,
        onComplete,
        onDelete,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
export { TodoProvider, TodoContext };
