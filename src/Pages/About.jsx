import React from "react";

const About = () => {
  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center align-items-center bg-info p-0"
        style={{ minHeight: "80vh" }}
      >
        <div
          className="card shadow p-4 text-center"
          style={{ maxWidth: "500px" }}
        >
          <h4 className="mb-3">Who am I?</h4>

          <h2 className="fw-bold text-primary">Anik Kumar Gupta</h2>

          <h5 className="text-secondary mb-3">React Developer</h5>

          <p>
            I am a frontend developer with strong
            knowledge of HTML, CSS, Bootstrap, JavaScript, and React. I have
            completed my Diploma from Mahamaya Polytechnic of Information
            Technology, Amroha (UP), and my B.Tech in Computer Science from I.K.
            Gujral Punjab Technical University. I specialize in building
            responsive and user-friendly websites that work smoothly across all
            devices. I am passionate about creating clean UI designs and
            improving user experience. I am continuously learning new
            technologies and improving my skills to become a better developer
            and contribute effectively to real-world projects.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
