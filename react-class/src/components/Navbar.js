import React from "react";


// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const style = {
  navbar: {
    background: "#6a1b9a",
    height: 60,
  },
  
  navbarA: {
    color: "#FFFFFF",
    fontSize: 13,
    textDecoration: "none",
    background:"#6a1b9a",
    margin: 5,
    lineHeight: 3,
  }
  
}


function Navbar() {
  return (
    <nav className="navbar" style={style.navbarA}>
      <a href="/">Welcome</a>
    </nav>
  );
}

export default Navbar;
