import React from "react";

// By importing the Header.css file, it is added to the DOM whenever this component loads

const styles = {
  header: {
    background: "#b71775",
    height: 200
  },
  
  headerH1: {
    margin: 0,
    paddingTop: 75,
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 3,
  },
}

function Header() {
  return (
    <header className="header">
      <h1>Welcome</h1>
    </header>
  );
}

export default Header;
