import React from "react";
import { FaSearch } from "react-icons/fa";
function TodoSearch({ id, label, placeholder }) {
  return (
    <div className="flex flex-col">
      <label className=" ml-1 pb-1 font-poppins " htmlFor={id}>{label}</label>
      <div className=" rounded-lg shadow-lg flex items-center align-middle border">
        <FaSearch className="bg-white  text-primary pl-2 h-5 w-8 flex-shrink" />
        <input
          id={id}
          className="ml-2 py-3 pl-2 h-full w-full rounded-lg placeholder-primary placeholder-opacity-70 focus:outline-none focus:ring focus:ring-inset focus:border-quaternary "
          type="text"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export { TodoSearch };
