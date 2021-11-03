import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Home = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h2>
            Payment Method <br /> for Everyone
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed di Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
          <button className="btn">Start Now</button>
        </article>
      
      <article className="hero-images">
        <img src={phoneImg} className="phone-img" alt="phone" />
      </article>
      <div className="footer">
        &copy; 2021 <a href="https://github.com/bariskayhan93">Baris Kayhan</a>
      </div>
      </div>
    </section>
  );
};

export default Home;
