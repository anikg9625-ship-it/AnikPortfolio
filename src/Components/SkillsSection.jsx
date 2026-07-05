import React from 'react'
import html from "../assets/Images/html-image.png";
import css from "../assets/Images/css-image.webp";
import javascript from "../assets/Images/JavaScript-image.jpg";
import bootstrap from "../assets/Images/bootstap-image.png";
import react from "../assets/Images/react-image.png";
import '../Css/SkillsSection.css'
const SkillsSection = () => {
  
  return (
    <>
      <section>
        <div className="container-fluid">

          <div className="fw-bold fs-2 text-center">Tools & Technologies</div>
          <marquee behavior="" direction="" scrollamount="10">
            <div className="d-flex me-auto gap-4">
              <img src={html} className="img-thumbnail" alt="" />
               <img src={css} className="img-fluid" alt="" />
                <img src={javascript} className="img-fluid" alt="" />
                 <img src={bootstrap} className="img-fluid" alt="" />
                  <img src={react} className="img-fluid" alt="" />
                  
            </div>
          </marquee>
        </div>
      </section>
    </>
  )
}

export default SkillsSection
