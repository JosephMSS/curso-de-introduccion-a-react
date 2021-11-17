import { TodoProvider } from "../../context/TodoContext";
import { ListTodoUI } from "./ListTodoUI";

function ListTodo() {
  return (
    <TodoProvider>
      <ListTodoUI />
    </TodoProvider>
  );
}

export { ListTodo };
