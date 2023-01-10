import React from "react";
import Login from "./components/Login";
import "./App.css";
import logo from "./images/logo.png";
import LoginP from "./components/LoginP";

export default function App() {
  const [isTrue, setIsTrue] = React.useState(false);
  function handler(id) {
    console.log(id);
    setIsTrue((prev) => !prev);
  }
  return (
    <div>
      {!isTrue && <LoginP func={handler} logo={logo} />}
      {isTrue && <Login func={handler} logo={logo} />}
    </div>
  );
}
