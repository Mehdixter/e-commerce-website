import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Shop from "./Shop";
import Services from "./Services";
import Cart from "./Cart";


function Layout() {
  const navigation = [
    {name: 'Home', href: '/'},
    {name: 'Shop', href: '/Shop'},
    {name: 'About', href: '/About'},
    {name: 'Contact', href: '/Contact'},
    {name: 'Services', href: '/Services'}
  ]
  return (
    <div>
      <BrowserRouter>
        <header>
          <nav
            className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark "
            arial-label="Furni navigation bar"
          >
            <div className="container">
              <NavLink className="navbar-brand" href="index.html" to="/">
                ArtBS<span>.</span>
              </NavLink>

              <button className="navbar-toggler" type="button">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarsFurni">
                
                 <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                   
                {navigation.map((item) => (
                  <li>
                   <NavLink 
                 key={item.name} 
                 to={item.href} 
                 className={(isActive)=>{
                   return 'custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0 '+
                   (isActive 
                    ? 'nav-item active text-decoration-none' 
                    : 'nav-link')
                  }}>{item.name}

                 </NavLink>
                   </li>
                ))}
                </ul>

                <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                  <li>
                    <NavLink className="nav-link" to="/Cart">
					<i className="fa-solid fa-cart-shopping"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="">
                    <i class="fa-solid fa-user"></i>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </main>
      

      {/* footer of this page */}

      <footer>
      <div className=" bg-primary bg-gradient">
        <footer className="footer-section  ">
          <div className="container relative">
            <div className="sofa-img">
              <img
                src="images/sofa.png"
                alt="Image"
                className="img-fluid"
              ></img>
            </div>

            <div className="row">
              <div className="col-lg-8">
                <div className="subscription-form">
                  <h3 className="d-flex align-items-center">
                    <span className="me-1">
                      <img
                        src="images/envelope-outline.svg"
                        alt="Image"
                        className="img-fluid"
                      ></img>
                    </span>
                    <span>Subscribe to Newsletter</span>
                  </h3>

                  <form action="#" className="row g-3">
                    <div className="col-auto">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                      ></input>
                    </div>
                    <div className="col-auto">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                      ></input>
                    </div>
                    <div className="col-auto">
                      <button className="btn btn-primary">
                        <span className="fa fa-paper-plane"></span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="row g-5 mb-5">
              <div className="col-lg-4">
                <div className="mb-4 footer-logo-wrap">
                  <NavLink to="#" className="footer-logo">
                    <span>ArtBS.</span>
                  </NavLink>
                </div>
                <p className="mb-4">
                  Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                  odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                  Aliquam vulputate velit imperdiet dolor tempor tristique.
                  Pellentesque habitant
                </p>

                <ul class="list-unstyled custom-social">
                  <li>
                    <NavLink to="#">
                      <span className="fa fa-brands fa-facebook-f"></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      <span className="fa fa-brands fa-twitter"></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      <span className="fa fa-brands fa-instagram"></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      <span className="fa fa-brands fa-linkedin"></span>
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div className="col-lg-8">
                <div className="row links-wrap">
                  <div className="col-6 col-sm-6 col-md-3">
                    <ul className="list-unstyled">
                      <li>
                        <NavLink to="#">About us</NavLink>
                      </li>
                      <li>
                        <NavLink to="#">Services</NavLink>
                      </li>
                      <li>
                        <NavLink to="#">Blog</NavLink>
                      </li>
                      <li>
                        <NavLink to="#">Contact us</NavLink>
                      </li>
                    </ul>
                  </div>

                  <div className="col-6 col-sm-6 col-md-3">
                    <ul className="list-unstyled">
                      <li>
                        <NavLink to="#">Jobs</NavLink>
                      </li>
                      <li>
                        <NavLink to="#">Our team</NavLink>
                      </li>
                      <li>
                        <NavLink to="#">Leadership</NavLink>
                      </li>
                      <li>
                        <NavLink to="#">Privacy Policy</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-top copyright">
              <div className="row pt-4">
                <div className="col-lg-6"></div>

                <div className="col-lg-6 text-center text-lg-end">
                  <ul className="list-unstyled d-inline-flex ms-auto">
                    <li className="me-4">
                      <NavLink to="#">Terms &amp; Conditions</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Privacy Policy</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </footer>
    </BrowserRouter>
    </div>
  );
}

export default Layout;
