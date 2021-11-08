import React from "react";
function Title({ title }) {
  return (
    <>
      <h1 className="text-primary mx-4 mt-8 mb-5  max-w-full text-3xl font-black font-poppins">
        {title}
      </h1>
    </>
  );
}
export { Title };
