import { useState } from "react";
import { Title } from "../components/Title";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
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
  const [todoList, setTodoList] = useState(todoListDefault);
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
  return (
    <>
      <Title title="Todo List" />
      <CreateTodoButton label="Add task" />
      <TodoSearch
        id="searchInput"
        placeholder="Search to do..."
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoCounter todoCompleted={todoCompleted} todoTotal={todoTotal} />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem text={todo.text} key={todo.id} completed={todo.completed} />
        ))}
      </TodoList>
    </>
  );
}

export { ListTodo };
