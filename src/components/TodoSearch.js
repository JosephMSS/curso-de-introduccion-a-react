import { FaSearch } from "react-icons/fa";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
function TodoSearch({ id, placeholder }) {
  const { setSearchValue } = useContext(TodoContext);
  const onSearchValueChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };
  return (
    <>
      <div className="flex flex-col relative ">
        <div
          className="
          absolute inset-1
          bg-gradient-to-r from-primary to-quaternary 
          rounded-lg blur opacity-10 -ml-2 -mt-2        
          "
        ></div>
        <div className="relative bg-white rounded-lg flex items-center align-middle border">
          <FaSearch className="  text-primary pl-2 h-5 w-8 flex-shrink" />
          <input
            id={id}
            className="ml-2 py-3 pl-2 h-full w-full rounded-lg placeholder-primary placeholder-opacity-70 focus:outline-none focus:ring focus:ring-inset focus:border-quaternary "
            type="text"
            placeholder={placeholder}
            onChange={onSearchValueChange}
          />
        </div>
      </div>
    </>
  );
}

export { TodoSearch };
