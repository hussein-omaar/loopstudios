import "../components/creationdesktop.css";

import erath from "../images/desktop/image-deep-earth.jpg";
import arcade from "../images/desktop/image-night-arcade.jpg";
import soccer from "../images/desktop/image-soccer-team.jpg";
import grid from "../images/desktop/image-grid.jpg";
import above from "../images/desktop/image-from-above.jpg";
import pocket from "../images/desktop/image-pocket-borealis.jpg";
import curiosity from "../images/desktop/image-curiosity.jpg";
import fisheye from "../images/desktop/image-fisheye.jpg";

function CreationDesktop() {
  return (
    <>
      <section className="creation-desk">
        <div className="creation-desk-title">
          <h2>Our Creations</h2>
          <div className="btn-wraper-desk">
            <button className="btn-desk">SEE ALL</button>
          </div>
        </div>

        <div className="gellary-desk">
          <div className="earth-desk">
            <img src={erath} width="100%" />
            <h1>DEEP EARTH</h1>
          </div>
          <div className="arcade-desk">
            <img src={arcade} width="100%" />
            <h1>NIGHT ARCADE</h1>
          </div>
          <div className="soccer-desk">
            <img src={soccer} width="100%" />
            <h1>SOCCER TEAM VR</h1>
          </div>
          <div className="the-grid-desk">
            <img src={grid} width="100%" />
            <h1>THE GRID</h1>
          </div>
          <div className="from-up-desk">
            <img src={above} width="100%" />
            <h1>FROM UP ABOVE VR</h1>
          </div>
          <div className="pocket-desk">
            <img src={pocket} width="100%" />
            <h1>POCKET BOREALIS</h1>
          </div>
          <div className="curiosity-desk">
            <img src={curiosity} width="100%" />
            <h1>THE CURIOSITY</h1>
          </div>
          <div className="fisheye-desk">
            <img src={fisheye} width="100%" />
            <h1>MAKE IT FISHEYE</h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default CreationDesktop;
