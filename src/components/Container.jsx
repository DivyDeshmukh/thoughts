import React from "react";

function Container({ children, className }) {
  return <div className={`${className} mx-[75px]`}>{children}</div>;
}

export default Container;
