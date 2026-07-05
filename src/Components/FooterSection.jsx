
import React from "react";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <div className="mb-2">
            <Link className="text-light me-3 text-decoration-none" to="/">Home</Link>
            <Link className="text-light me-3 text-decoration-none" to="/projects">Projects</Link>
            <Link className="text-light me-3 text-decoration-none" to="/skills">Skills</Link>
            <Link className="text-light me-3 text-decoration-none" to="/contact">Contact</Link>
            <Link className="text-light text-decoration-none" to="/about">About</Link>
          </div>
          <div>
            <Link className="text-info fw-bold fs-4 text-decoration-none" to="/">
              ReactWithAnik
            </Link>
          </div>
        </div>
        <div className="text-center mt-3">
          <small className="text-secondary">
            © 2026 ReactWithAnik
          </small>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection
