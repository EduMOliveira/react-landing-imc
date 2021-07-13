import { useState } from "react";

import { Hamburger } from "../components/Hamburger";

import logo from "../assets/images/logo.png";

import "../styles/header.scss";

export function Header() {
  const [showHeader, setShowHeader] = useState("");
  const [animHam, setAnimHam] = useState("");

  function handleHeader() {
    if (showHeader === "") {
      setShowHeader("responsive");
      setAnimHam("open");
    } else {
      setShowHeader("");
      setAnimHam("");
    }
  }

  return (
    <header className="header">
      <a href="/">
        <img src={logo} alt="imczin logo" />
      </a>
      <div className={`header_menu ${showHeader}`}>
        <p>Features</p>
        <p>About</p>
      </div>
      <Hamburger className={`icon ${animHam}`} onPress={handleHeader} />
    </header>
  );
}
