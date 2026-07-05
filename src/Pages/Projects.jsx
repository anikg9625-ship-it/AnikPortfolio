
import React from 'react'
import Anikmart from "../assets/Images/anikmart.png";
import Anikburger from "../assets/Images/anikburger.png";
import Floweraura from "../assets/Images/flower-aura.png";
import Tanishq from "../assets/Images/tanishq.png";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      Pimage: Anikburger,
      Ctitle: "Anikburger",
      About: "A modern and fully responsive burger website built with a clean and user-friendly interface.",
    },
    {
      id: 2,
      Ctitle: "Floweraura",
      Pimage: Floweraura,
      About: "A responsive frontend clone inspired by the FlowerAura platform with elegant UI design.",
    },
    {
      id: 3,
      Ctitle: "Tanishq",
      Pimage: Tanishq,
      About: "A stylish and responsive jewelry website inspired by the Tanishq platform.",
    },
    {
      id: 4,
      Ctitle: "Anik-Mart",
      Pimage: Anikmart,
      About: "A modern and fully responsive grocery shopping website built with a clean and user-friendly interface.",
    }
  ];

  return (
    <div className="bg-info py-5">
      <div className="container">

        <h2 className="text-center text-white fw-bold mb-5">
          My Projects
        </h2>

        <div className="row g-4">

          {projectList.map((item) => (
            <div className="col-12 col-md-6" key={item.id}>

              <div className="card border-0 shadow-lg h-100">

                <img
                  src={item.Pimage}
                  className="card-img-top rounded-top"
                  style={{ height: "250px", objectFit: "contain" }}
                  alt={item.Ctitle}
                />

                <div className="card-body text-center">

                  <h5 className="card-title fw-bold text-dark mb-3">
                    {item.Ctitle}
                  </h5>

                  <p className="card-text text-secondary">
                    {item.About}
                  </p>

                  <div className="d-flex gap-2 justify-content-center flex-wrap mt-3">
                    <span className="badge bg-primary">React.js</span>
                    <span className="badge bg-dark">Bootstrap</span>
                    <span className="badge bg-secondary">HTML</span>
                    <span className="badge bg-secondary">CSS</span>
                    <span className="badge bg-secondary">JavaScript</span>
                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Projects;

