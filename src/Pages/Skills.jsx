import React from "react";
import html from "../assets/Images/html-image.png";
import css from "../assets/Images/css-image.webp";
import javascript from "../assets/Images/javascript-image.jpg";
import bootstap from "../assets/Images/bootstap-image.png";
import react from "../assets/Images/react-image.png";

const Skills = () => {
  const skills = [
    {
      id: 1,
      img: html,
      name: "HTML",
      text: "I have strong knowledge of HTML including creating structured web pages, using semantic tags, forms, tables, media elements, and building responsive and accessible layouts.",
    },
    {
      id: 2,
      img: css,
      name: "CSS",
      text: "I have strong knowledge of CSS including styling web pages, working with Flexbox and Grid, creating responsive designs, using animations, transitions, and building visually appealing user interfaces.",
    },
    {
      id: 3,
      img: bootstap,
      name: "Bootstrap",
      text: "I have good knowledge of Bootstrap, including creating responsive layouts, using grid system, components, utilities, and building mobile-first, fast and visually consistent user interfaces.",
    },
    {
      id: 4,
      img: react,
      name: "React",
      text: "I have a solid understanding of React.js, including building reusable components, managing state and props, handling events, working with hooks, and creating dynamic and responsive user interfaces.",
    },
    {
      id: 5,
      img: javascript,
      name: "JavaScript",
      text: "I have a basic understanding of JavaScript, including variables, functions, DOM manipulation, and event handling, and I am continuously improving my skills.",
    },
  ];

  return (
    <div className="bg-info py-5">
      <div className="container">
        <h2 className="text-center text-white mb-5 shadow-sm py-2 rounded">
          Technical Skills
        </h2>

        <div className="row">
          {skills.map((item) => (
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4" key={item.id}>
              <div className="card h-100 shadow-sm border-0">
                
                <img
                  src={item.img}
                  className="card-img-top p-3"
                  alt={item.name}
                  style={{ height: "150px", objectFit: "contain" }}
                />

                <div className="card-body text-center">
                  <h5 className="card-title text-info fw-bold">
                    {item.name}
                  </h5>
                  <p className="card-text small">
                    {item.text}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;