import React from "react";
import "./Button.css";

const Button = ({ text }) => {
  return (
    <button onClick={onPreviousHandeler} className="coding-button">
      {text}
    </button>
  );
};

export default Button;
