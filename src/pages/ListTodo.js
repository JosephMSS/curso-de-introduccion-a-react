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
      completed: false,
    },
    {
      id: 2,
      text: "Tomar el curso de react",
      completed: false,
    },
    {
      id: 3,
      text: "Llorar con la llorona",
      completed: false,
    },
  ];
  return (
    <div className="mx-6">
      <Title title="Todo List" />
      <CreateTodoButton label="Add task" />
      <TodoSearch 
      id="searchInput"
      label="Search"
      placeholder="Search to do..." 
      />
      <TodoCounter />
      <TodoList>
        {todoList.map((todo) => (
          <TodoItem text={todo.text} key={todo.id} />
        ))}
      </TodoList>
    </div>
  );
}

export { ListTodo };
