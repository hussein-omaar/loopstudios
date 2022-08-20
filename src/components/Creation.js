import erath from "../images/image-deep-earth.jpg";
import arcade from "../images/image-night-arcade.jpg";
import soccer from "../images/image-soccer-team.jpg";
import grid from "../images/image-grid.jpg";
import above from "../images/image-from-above.jpg";
import pocket from "../images/image-pocket-borealis.jpg";
import curiosity from "../images/image-curiosity.jpg";
import fisheye from "../images/image-fisheye.jpg";

import "../components/creations.css";

function Creation() {
  return (
    <>
      <section className="creation">
        <h2>Our Creations</h2>

        <div className="gellary">
          <div className="earth">
            <img src={erath} width="100%" />
            <h1>DEEP EARTH</h1>
          </div>
          <div className="arcade">
            <img src={arcade} width="100%" />
            <h1>NIGHT ARCADE</h1>
          </div>
          <div className="soccer">
            <img src={soccer} width="100%" />
            <h1>SOCCER TEAM VR</h1>
          </div>
          <div className="the-grid">
            <img src={grid} width="100%" />
            <h1>THE GRID</h1>
          </div>
          <div className="from-up">
            <img src={above} width="100%" />
            <h1>FROM UP ABOVE VR</h1>
          </div>
          <div className="pocket">
            <img src={pocket} width="100%" />
            <h1>POCKET BOREALIS</h1>
          </div>
          <div className="curiosity">
            <img src={curiosity} width="100%" />
            <h1>THE CURIOSITY</h1>
          </div>
          <div className="fisheye">
            <img src={fisheye} width="100%" />
            <h1>MAKE IT FISHEYE</h1>
          </div>
        </div>

        <div className="btn-wraper">
          <button className="btn">SEE ALL</button>
        </div>
      </section>
    </>
  );
}

export default Creation;
