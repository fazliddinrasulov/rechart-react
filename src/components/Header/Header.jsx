import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const myStyle = {
    color: "red",
  };
  return (
    <>
      <h1 style={myStyle}>Header</h1>
      <h2 className="text-primary-emphasis">Hello from Header primary</h2>
      <h2 className="text-danger">Hello from Header primary</h2>
    </>
  );
};

export default Header;
