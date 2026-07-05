import React from 'react'
import '../Css/Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <section>
        <div className="container-fluid p-0">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
   <Link  className="navbar-brand fw-bold fs-2" id='navbar' to="/">ReactWithAnik</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto gap-3">
        <li className="nav-item">
        <Link className="nav-link fw-bold text-info text-decoration-underline" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link fw-bold" to="/projects">Projects</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link fw-bold" to="/skills">Skills</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link fw-bold" to="/contact">Contact</Link>
        </li>
         <li className="nav-item">
        <Link className="nav-link fw-bold" to="/about">About</Link>
        </li>
      
      </ul>
     
    </div>
  </div>
</nav>
        </div>
      </section>
    </>
  )
}

export default Navbar
