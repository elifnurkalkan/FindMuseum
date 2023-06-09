import React from "react";
import { Link } from "react-router-dom";
import "./events.css";
import sunflowers from "../../../assets/img/van-gogh-museum.jpeg";
import auto from "../../../assets/img/louwman-museum.jpeg";
import escher from "../../../assets/img/kunstmuseum.jpeg";
import gift from "../../../assets/img/gift.svg";

const Events = () => {
  return (
    <section className="upcoming-events">
      <div className="home-offers-section">
        <div className="home-offers-container">
          <img src={gift} className="home-offers-img" />
        </div>

        <div className="offers-section">
          <p className="offers-text">
            Still looking for something interesting? <br /> You can learn more
            about special museums offers!
          </p>

          <Link to="/offers">
            <button className="home-offers-button">Check it out</button>
          </Link>
        </div>
      </div>

      <div className="van-gogh-section">
        <img className="sunflowers" src={sunflowers} alt="sunflowers" />

        <div className="event-sections-text">
          <div className="section-para">
            <h2>Van Gogh Museum</h2>
            <b>Exhibiton Time:10 February 2023 - 10 April 2023</b>
            <hr />
            <p>
              The Van Gogh Museum celebrates 50 years of inspiration. Read on
              for the complete anniversary programme.
            </p>

            <p>
              During this special year, we will be pulling out all the stops
              with exhibitions that bring you closer to Van Gogh as an artist
              and a person.
            </p>
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.vangoghmuseum.nl/en/visit/whats-on/50-years-of-inspiration"
          >
            <button className="section-button">Check it out</button>
          </a>
        </div>
      </div>

      <div className="louwman-section">
        <div className="event-sections-text">
          <div className="section-para">
            <h2>Louwman Museum</h2>
            <b>Exhibiton Time:1 January 2023 - 31 December 2023</b>
            <hr />
            <h4></h4>
            <p>
              Collection of automobiles..Meet all the masterpieces from the
              history of progress like: Brooke 25/30-HP Swan Car & Talbot Lago
              T150 SS Teardrop Coupe Figoni & Falaschi & Pegaso Z-102 Cúpula &
              Spyker 60-HP Four-Wheel Drive Racing Car.
            </p>
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.louwmanmuseum.nl/en/exposition/always-on-display-masterpieces-of-mobility/"
          >
            <button className="section-button">Check it out</button>
          </a>
        </div>

        <img className="auto" src={auto} alt="auto" />
      </div>

      <div className="kunstmuseum-section">
        <img className="escher" src={escher} alt="escher" width={150} />

        <div className="event-sections-text">
          <div className="section-para">
            <h2>Escher - Other World</h2>
            <b>Exhibiton Time:18 February 2023 - 10 September 2023</b>
            <hr />
            <p>
              Birds that become fish, water that flows uphill, two hands drawing
              each other: with consummate skill, M.C. Escher would transform a
              blank sheet of paper into his own infinite worlds where he would
              play with his viewers perception. His masterful metamorphoses and
              tessellations continue to amaze and inspire people all over the
              world.
            </p>
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.kunstmuseum.nl/en/exhibitions/escher-other-world"
          >
            <button className="section-button">Check it out</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;
