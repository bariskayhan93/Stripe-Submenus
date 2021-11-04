import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";
import Start from "./Modal";

const Home = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>
            Payment Method <br /> for Everyone
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed di Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
          <button className="btn"> <Start/></button>
        </article>
      
      <article className="hero-images">
        <img src={phoneImg} className="phone-img" alt="phone" />
      </article>
      </div>
    </section>
  );
};

export default Home;
