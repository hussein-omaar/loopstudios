import React from "react";
import logo from "../images/logo.svg";
import "../components/footer.css";
import { GrFacebook } from "react-icons/gr";
import { FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="left">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="menue">
            <ul>
              <li>
                <button>About</button>
              </li>
              <li>
                <button>Career</button>
              </li>
              <li>
                <button>Events</button>
              </li>
              <li>
                <button>Products</button>
              </li>
              <li>
                <button>Support</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="social">
            <ul>
              <li>
                <GrFacebook />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaPinterest />
              </li>
              <li>
                <FaInstagram />
              </li>
            </ul>
          </div>

          <div className="rights">
            <span> @ 2021 Loopstudios. All rights reserved</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
