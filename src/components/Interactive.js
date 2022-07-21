import React from "react";
import logo from "../images/image-interactive.jpg";

import "../components/interactive.css";

function Interactive() {
  return (
    <>
      <div className="interactive">
        <div className="interactive-image">
          <img src={logo} alt="interactive image " />
        </div>
        <div className="content">
          <h1> The leader in interactive VR</h1>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </>
  );
}

export default Interactive;
