import React from "react";
function Title({ title }) {
  return (
    <>
      <h2 className="text-primary mx-4 mt-8 mb-5  max-w-full text-3xl font-black font-poppins">
        {title}
      </h2>
    </>
  );
}
export { Title };
