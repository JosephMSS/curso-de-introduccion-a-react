import { Title } from "../../components/Title";
import { TodoCounter } from "../../components/TodoCounter";
import { TodoSearch } from "../../components/TodoSearch";
import { TodoList } from "../../components/TodoList";
import { TodoItem } from "../../components/TodoItem";
import { CreateTodoButton } from "../../components/CreateTodoButton";
function ListTodo({
  searchValue,
  setSearchValue,
  searchedTodos,
  todoCompleted,
  todoTotal,
  onComplete,
  onDelete,
}) {
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
          <TodoItem
            text={todo.text}
            id={todo.id}
            key={todo.id}
            completed={todo.completed}
            onComplete={() => {
              onComplete(todo.id);
            }}
            onDelete={() => {
              onDelete(todo.id);
            }}
          />
        ))}
      </TodoList>
    </>
  );
}

export { ListTodo };
