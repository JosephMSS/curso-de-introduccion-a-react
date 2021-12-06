import React from "react";
function Button({ type, textColor, label, bgColor, onClickButton }) {
  return (
    <>
      <button
        onClick={onClickButton}
        type={type}
        className={`
            bg-${bgColor} text-${textColor} 
            rounded-xl
            py-3 px-4 shadow-2xl
            font-poppins
            font-bold
            tracking-wider`}
      >
        {label}
      </button>
    </>
  );
}
export { Button };
