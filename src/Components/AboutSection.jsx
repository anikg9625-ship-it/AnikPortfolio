import React from "react";
import anikimg from "../assets/Images/anikimg.png";
import "../Css/AboutSection.css";
const AboutSection = () => {
  return (
    <>
      <section id="section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-12">
              <img src={anikimg} className="img-fluid " alt="" id="anik-img" />
            </div>
            <div className="col-12 col-lg-6 col-md-12">
              <h2 className="fs-3 text-center mt-3 mb-3 bg-white text-info">Who I Am</h2>
              <p className="">
                Hello!
                <br /> I am a passionate Frontend Developer with a B.Tech degree
                in Computer Science Engineering. I have strong knowledge of
                modern web technologies including HTML, CSS, Bootstrap,
                JavaScript, and React. I specialize in building clean,
                user-friendly, and fully responsive websites. I enjoy turning
                ideas into real, functional web experiences. Over time, I have
                worked on multiple projects as a frontend developer, where I
                focused on creating attractive UI designs and improving user
                experience. My goal is to build websites that are not only
                visually appealing but also fast and performance-oriented. I am
                always eager to learn new technologies and improve my skills. I
                believe in writing clean, efficient code and following best
                practices. I love solving problems and taking on new challenges
                that help me grow as a developer.
              </p>
              <article>
                Passionate about crafting responsive websites, I specialize in
                React and modern frontend tools. I focus on delivering smooth
                user experiences with clean and efficient code.
              </article>
              <p>
                I’m a creative frontend developer who loves building
                responsive and user-friendly web experiences. I turn ideas into
                clean, modern designs using React and modern web technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
