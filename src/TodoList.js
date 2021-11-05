import { Fragment } from "react";

function TodoList(props) {
  return (
    <Fragment>
      <section>
        <ul>{props.children}</ul>
      </section>
    </Fragment>
  );
}

export { TodoList };
