import React from "react";
import family from "../../../assets/cover/Family.jpg";

function About() {
  return (
    <section id="about-me" className="bio">
      <h2>Welcome to our Wishing Well!</h2>
      <img
        className="family"
        src={family}
        alt="Joseph Cooper with his wife Erin and their two dogs, Rosie and Rango."
      />
      <h2>
        Click the links above to read a few stories about how we fell in love.
      </h2>

      <br></br>
      <div className="info">


      </div>
    </section>

  );
}

export default About;
