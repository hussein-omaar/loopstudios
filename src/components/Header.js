import { useRef, useState } from "react";

import logo from "../images/logo.svg";

import "../components/header.css";

function Header() {
  const [toggle, setToggle] = useState(true);

  const [rotate, setRotate] = useState(false);

  const menueClick = () => {
    setToggle(!toggle);

    setRotate(!rotate);
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Loopstudion-Logo" />
        </div>

        <nav className="nav-menue" id={toggle ? "display" : null}>
          <div className="logo">
            <img src={logo} alt="Loopstudion-Logo" />
          </div>

          <ul>
            <li>
              <button>about</button>
            </li>
            <li>
              <button>career</button>
            </li>
            <li>
              <button>events</button>
            </li>
            <li>
              <button>products</button>
            </li>
            <li>
              <button>support</button>
            </li>
          </ul>
        </nav>

        <div
          className="hamburger-menue"
          onClick={menueClick}
          id={rotate ? "rotate" : null}
        >
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div>
      </header>
    </>
  );
}

export default Header;
