import React from "react";

function Button({ onClick, value }) {
  return (
    <button
      onClick={onClick}
      className="bg-slate-800 text-white rounded-md px-10 p-2"
    >
      {value}
    </button>
  );
}

export default Button;
