import React from "react";

const Button = ({ num, click }) => {
  return (
    <button className="border-2 rounded-md py-4 px-2 border-blue-300 dark:border-gray-300" onClick={() => click(true)}>
      <p className="text-black dark:text-gray-300">You Added <span>{num}</span> {num <= 1 ? "item" : "items"}</p>
    </button>
  );
};

export default Button;
