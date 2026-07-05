import React from "react";
import Anikmart from "../assets/Images/anikmart.png";
import Anikburger from "../assets/Images/anikburger.png";
import Floweraura from "../assets/Images/flower-aura.png";
import Tanishq from "../assets/Images/tanishq.png";


const MyProjectSection = () => {
  return (
    <>
      <div className="bg-info py-4">
        <div className="container">
          <p className="fw-bold fs-2 text-center text-white mb-4">
            Our Projects
          </p>

          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner rounded">
              <div className="carousel-item active">
                <div className="px-4">
                  <img
                    src={Anikburger}
                    className="img-fluid w-100 rounded mt-3"
                    alt=""
                  />
                  <p className="fs-5 text-center text-light mt-3">
                    A modern and fully responsive burger website built with a
                    clean and user-friendly interface.
                  </p>
                </div>
              </div>

              <div className="carousel-item">
                <div className="px-4">
                  <img
                    src={Floweraura}
                    className="img-fluid w-100 rounded mt-3"
                    alt=""
                  />
                  <p className="fs-5 text-center text-light mt-3">
                    A responsive frontend clone inspired by the FlowerAura
                    platform with elegant UI design.
                  </p>
                </div>
              </div>

              <div className="carousel-item">
                <div className="px-4">
                  <img
                    src={Tanishq}
                    className="img-fluid w-100 rounded mt-3"
                    alt=""
                  />
                  <p className="fs-5 text-center text-light mt-3">
                    A stylish and responsive jewelry website inspired by the
                    Tanishq platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProjectSection;
