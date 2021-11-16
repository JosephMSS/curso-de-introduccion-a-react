import { useState, useEffect } from "react";
import { ListTodoUI } from "./ListTodoUI";
const useLocalStorage = (itemName, initialValue) => {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;
      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageItem);
      }
      setItem(parsedItem);
      setLoading(false);
    }, 2000);
  },[]);
  const saveItem = (newItem) => {
    const stringifyItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifyItem);
    setItem(newItem);
  };
  return { item, saveItem, loading };
};

function ListTodo() {
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
  const {
    item: todoList,
    saveItem: setTodoList,
    loading,
  } = useLocalStorage("TODO_V1",[]);
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
    <>
      <ListTodoUI
        loading={loading}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchedTodos={searchedTodos}
        todoCompleted={todoCompleted}
        todoTotal={todoTotal}
        onComplete={onComplete}
        onDelete={onDelete}
      />
    </>
  );
}

export { ListTodo };
