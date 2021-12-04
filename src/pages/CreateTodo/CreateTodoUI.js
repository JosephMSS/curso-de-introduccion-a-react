import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
function CreateTodoUI() {
  return (
    <>
      <div className="bg-white p-9 rounded-2xl mx-5">
        <div
          className=" 
          shadow-lg 
          rounded-lg
          flex flex-col
          w-full"
        >
          <input
            type="text"
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
            name="todoDetail"
            id="todoDetail"
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
          <Button textColor="secondary" label="Discard" bgColor="white" />
          <Button textColor="white" label="Create" bgColor="secondary" />
        </div>
      </div>
    </>
  );
}

export { CreateTodoUI };
