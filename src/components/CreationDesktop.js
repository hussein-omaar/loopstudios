import React, { useState } from "react";

import data from "../data-desktop";

import "../components/creationdesktop.css";

function CreationDesktop() {
  const [cards, setCards] = useState(data);
  return (
    <>
      <section className="creation-desktop">
        <div className="title">
          <h2>Our Creations</h2>
          <div className="btn-wraper">
            <button className="btn">SEE ALL</button>
          </div>
        </div>

        <section>
          {cards.map((card) => {
            const { id, image, title } = card;

            return (
              <div className="gellary" key={id}>
                <div className="image-container">
                  <img src={image} alt="creation gellary" width={"100%"} />
                </div>

                <h1>{title}</h1>
              </div>
            );
          })}
        </section>
      </section>
    </>
  );
}

export default CreationDesktop;
