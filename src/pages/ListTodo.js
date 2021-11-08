import React from "react";
import { Title } from "../components/Title";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
function ListTodo() {
  const todoList = [
    {
      id: 1,
      text: "Cortar Cebolla",
      completed: true,
    },
    {
      id: 2,
      text: "Tomar el curso de react",
      completed: false,
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
  return (
    <>
      <Title title="Todo List" />
      <CreateTodoButton label="Add task" />
      <TodoSearch id="searchInput" placeholder="Search to do..." />
      <TodoCounter />
      <TodoList>
        {todoList.map((todo) => (
          <TodoItem text={todo.text} key={todo.id} completed={todo.completed} />
        ))}
      </TodoList>
    </>
  );
}

export { ListTodo };
