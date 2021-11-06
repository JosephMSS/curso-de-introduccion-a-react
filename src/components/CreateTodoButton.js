function CreateTodoButton({ label }) {
  return (
    <>
      <div className="text-xl text-secondary flex flex-row justify-end mx-4 my-3 max-w-full">
        <button className="font-bold font-poppins">
          {label}
          <i className="font-bold font-poppins">+</i>
        </button>
      </div>
    </>
  );
}

export { CreateTodoButton };
