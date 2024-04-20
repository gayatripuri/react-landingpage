import React from "react";
import './Navbar.css'
import navlogo from "../../assets/navbar_logo.png";
const Navbar = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <div className="navLogo">
              <img src={navlogo} alt="" />
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse navbarui"
                id="navbarText"
              ></div>
            </div>

            <div  className="collapse navbar-collapse navbarui" id="navbarText">
              <ul  className="navbar-nav me-auto mb-2 mb-lg-0">
                <li  className="nav-item">
                  <a href="#home" className="nav-link">home</a>
                </li>
                <li className="nav-item">
                  <a href="#about" className="nav-link">about</a>
                </li>
                <li className="nav-item">
                  <a href="#products" className="nav-link">products</a>
                </li>
                <li className="nav-item">
                  <a href="#innovations" className="nav-link">innovations</a>
                </li>
                <li className="nav-item">
                  <a href="#carrers" className="nav-link">carrers</a>
                </li>
                <li className="nav-item">
                <a href="#contact" className="nav-link">contact</a></li>
              </ul>
            </div>
            
              <div
               className="navBtn">Enquire now</div>
            </div>
          
        </nav>
      </header>
    </>
  );
};

export default Navbar;
