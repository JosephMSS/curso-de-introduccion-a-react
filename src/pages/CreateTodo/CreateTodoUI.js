import { useContext, useState } from "react";
import { Button } from "../../components/Button";
import { TodoContext } from "../../context/TodoContext";
function CreateTodoUI() {
  const { setOpenModal, onCreate } = useContext(TodoContext);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const onDiscard = () => {
    setOpenModal(false);
  };
  const resetForm = () => {
    setTitle("");
    setText("");
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(text, title);
    setOpenModal(false);
    resetForm();
  };
  const onChangeText = (e) => {
    const { value } = e.target;
    setText(value);
  };
  const onChangeTitle = (e) => {
    const { value } = e.target;
    setTitle(value);
  };
  return (
    <>
      <form onSubmit={onSubmit} className="bg-white p-9 rounded-2xl mx-5">
        <div
          className=" 
          shadow-lg 
          rounded-lg
          flex flex-col
          w-full"
        >
          <input
            onChange={onChangeTitle}
            value={title}
            type="text"
            id="title"
            placeholder="Title"
            className="
            font-poppins
            font-black
            text-primary
            text-lg
            w-full h-full px-3 pt-2
          rounded-t-lg
          outline-none"
          />
          <textarea
            onChange={onChangeText}
            value={text}
            name="todoDetail"
            id="text"
            cols="30"
            rows="10"
            placeholder="Note details"
            className="
            font-poppins
            text-primary
            p-3
            w-full
            rounded-b-lg
            outline-none
            h-50
            resize-none"
          ></textarea>
        </div>
        <div className="flex justify-around m-3">
          <Button
            type="button"
            textColor="secondary"
            label="Discard"
            bgColor="white"
            onClickButton={onDiscard}
          />
          <Button
            type="submit"
            textColor="white"
            label="Create"
            bgColor="secondary"
          />
        </div>
      </form>
    </>
  );
}

export { CreateTodoUI };
