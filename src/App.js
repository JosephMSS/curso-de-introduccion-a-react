import { Fragment } from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
function App() {
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
    <Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem text={todo.text} key={todo.id} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </Fragment>
  );
}

export default App;
