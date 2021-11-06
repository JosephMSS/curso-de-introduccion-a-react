import React from "react";
import { Title } from "../components/Title";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
function ListTodo() {
  const todos = [
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
      <Title title="TODO List" />
      <CreateTodoButton label="Add task" />
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem text={todo.text} key={todo.id} />
        ))}
      </TodoList>
    </div>
  );
}

export { ListTodo };
