import React from "react";
import Searchbox from "./searchbox";
import Button from "./button";
import "./navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <img src="logo.png" alt="searchicon" width={67} height={34} />
      <Searchbox />
      <Button>Give Feedback</Button>
    </div>
  );
}

export default Navbar;
