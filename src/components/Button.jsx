import React from "react";
import { Link } from "react-router-dom";

function Button({ text, className, linkClassName }) {
  return (
    <div
      id="button"
      className={` relative flex items-center justify-center mt-4 ${className} uppercase`}
    >
      <Link
        to="/"
        className={`relative text-white bg-black text-[12px] px-4 py-2 rounded-full z-[10] ${linkClassName} hover:border-4 hover:border-black hover:text-black`}
      >
        {text}
      </Link>
      <i class="ri-logout-circle-r-line font-sans font-extralight text-4xl ml-[-11.5px]"></i>
    </div>
  );
}

export default Button;
