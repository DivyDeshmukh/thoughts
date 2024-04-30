import React from "react";

function Input({
  type = "text",
  placeholder = "",
  className = "",
  label = "",
  ...props
}) {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={`bg-[#16131a] ${className} text-white`}
        required
        {...props}
      />
    </div>
  );
}

export default Input;
