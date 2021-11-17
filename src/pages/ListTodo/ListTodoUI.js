import { Title } from "../../components/Title";
import { TodoCounter } from "../../components/TodoCounter";
import { TodoSearch } from "../../components/TodoSearch";
import { TodoList } from "../../components/TodoList";
import { TodoItem } from "../../components/TodoItem";
import { CreateTodoButton } from "../../components/CreateTodoButton";
function ListTodoUI({
  error,
  loading,
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
      {error && (
        <p className="text-red-600">Error al cargar la informacion...</p>
      )}
      {loading && (
        <p className="text-green-500">Estamos Cargando la informacion...</p>
      )}
      {!loading && !searchedTodos.length && !error && (
        <p className="text-green-500">Crea tu primer TODO</p>
      )}
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

export { ListTodoUI };
