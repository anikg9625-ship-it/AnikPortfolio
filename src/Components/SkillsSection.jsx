import React from 'react'
import html from "../assets/images/html-image.png";
import css from "../assets/images/css-image.webp";
import javascript from "../assets/images/javascript-image.jpg";
import bootstrap from "../assets/images/bootstap-image.png";
import react from "../assets/images/react-image.png";
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
