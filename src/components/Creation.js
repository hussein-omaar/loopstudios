import React, { useState } from "react";

import data from "../data-mobile";

import "../components/ceations-mobile.css";

function Creation() {
  const [cards, setCards] = useState(data);
  return (
    <>
      <section className="creation-mobile">
        <h2>Our Creations</h2>

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

        <div className="btn-wraper">
          <button className="btn">SEE ALL</button>
        </div>
      </section>
    </>
  );
}

export default Creation;
