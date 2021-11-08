import React from "react";
import { BiCheckCircle } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
function TodoItem(props) {
  return (
    <>
      <li className="grid  grid-cols-8 my-3 ">
        <span className="my-auto mx-1 col-span-1">
          <BiCheckCircle className="text-xl" />
        </span>
        <p className="col-span-5 truncate mx-1">{props.text}</p>
        <span className="mx-1">
          <AiOutlineEdit className="text-xl" />
        </span>
        <span className="mx-1">
          <AiOutlineDelete className="text-xl" />
        </span>
      </li>
    </>
  );
}

export { TodoItem };
