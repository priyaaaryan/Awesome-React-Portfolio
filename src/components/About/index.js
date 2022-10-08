import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";
function About() {
  return (
    <section className="my-5">
      <h1 id="about">
        “You might not think that programmers are artists, but programming is an
        extremely creative profession. It's logic-based creativity.” - John
        Romero
      </h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
      <div className="my-2">
        <p>
          My name is Priyaaaryan and I am changing my field to become a full
          stack developer. I love to code and learn different ways to solve
          problems.
        </p>
      </div>
    </section>
  );
}

export default About;
