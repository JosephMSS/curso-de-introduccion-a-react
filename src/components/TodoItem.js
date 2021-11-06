import { Fragment } from "react";

function TodoItem(props) {
  return (
    <Fragment>
      <li>
        <span>C</span>
        <p>{props.text}</p>
        <span>X</span>
      </li>
    </Fragment>
  );
}

export { TodoItem };
