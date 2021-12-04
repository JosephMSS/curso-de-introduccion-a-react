import React from "react";
function Button({ textColor, label, bgColor }) {
  return (
    <>
      <input
        type="button"
        value={label}
        className={`
            bg-${bgColor} text-${textColor} 
            rounded-xl
            py-3 px-4 shadow-2xl
            font-poppins
            font-bold
            tracking-wider`}
      />
    </>
  );
}
export { Button };
