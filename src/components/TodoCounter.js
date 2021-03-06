import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
function TodoCounter() {
  const { todoTotal, todoCompleted } = useContext(TodoContext);
  return (
    <>
      <h2
        className="
     flex
     justify-center
     justify-self-auto
     mb-4 mt-3
     text-primary
     xs:text-base
      font-poppins font-semibold
      sm:text-lg
      "
      >
        Has completado {todoCompleted} de {todoTotal} TODOS
      </h2>
    </>
  );
}
export { TodoCounter };
