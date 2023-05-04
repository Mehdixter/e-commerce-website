import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../App.css";
import WhyUs from "../components/WhyUs";
import { NavLink } from "react-router-dom";
import Testimonials from "../components/Testimonials";
const Home = () => {
  return (
    <div>
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>
                  Modern Interior{" "}
                  <span clsasNclassName="d-block">Design Studio</span>
                </h1>
                <p className="mb-4">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate velit imperdiet dolor tempor
                  tristique.
                </p>
                <p>
                  <NavLink
                   
                    className="btn btn-secondary me-2"
                    to="/Shop"
                  >
                    Shop Now
                  </NavLink>
                  <NavLink
                    
                    className="btn btn-white-outline"
                    to="/Shop"
                  >
                    Explore
                  </NavLink>
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-img-wrap">
                <img src="images/couch.png" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
              <h2 className="mb-4 section-title">
                Crafted with excellent material.
              </h2>
              <p className="mb-4">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.{" "}
              </p>
              <p>
                <NavLink to="shop.html" className="btn">
                  Explore
                </NavLink>
              </p>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <NavLink className="product-item" to="cart.html">
                <img
                  src="images/product-1.png"
                  className="img-fluid product-thumbnail"
                />
                <h3 className="product-title">Nordic Chair</h3>
                <strong className="product-price">$50.00</strong>

                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid" />
                </span>
              </NavLink>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <NavLink className="product-item" to="cart.html">
                <img
                  src="images/product-2.png"
                  className="img-fluid product-thumbnail"
                />
                <h3 className="product-title">Kruzo Aero Chair</h3>
                <strong className="product-price">$78.00</strong>

                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid" />
                </span>
              </NavLink>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <NavLink className="product-item" to="cart.html">
                <img
                  src="images/product-3.png"
                  className="img-fluid product-thumbnail"
                />
                <h3 className="product-title">Ergonomic Chair</h3>
                <strong className="product-price">$43.00</strong>

                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid" />
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <WhyUs />

      <div className="we-help-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="imgs-grid">
                <div className="grid grid-1">
                  <img src="images/img-grid-1.jpg" alt="Untree.co" />
                </div>
                <div className="grid grid-2">
                  <img src="images/img-grid-2.jpg" alt="Untree.co" />
                </div>
                <div className="grid grid-3">
                  <img src="images/img-grid-3.jpg" alt="Untree.co" />
                </div>
              </div>
            </div>
            <div className="col-lg-5 ps-lg-5">
              <h2 className="section-title mb-4">
                We Help You Make Modern Interior Design
              </h2>
              <p>
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                vulputate velit imperdiet dolor tempor tristique. Pellentesque
                habitant morbi tristique senectus et netus et malesuada
              </p>

              <ul className="list-unstyled custom-list my-4">
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
              </ul>
              <p>
                <NavLink to="#" class="btn">
                  Explore
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Start Popular Product --> */}
      <div className="popular-product">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="product-item-sm d-flex">
                <div className="thumbnail">
                  <img
                    src="images/product-1.png"
                    alt="Image"
                    className="img-fluid"
                  />
                </div>
                <div className="pt-3">
                  <h3>Nordic Chair</h3>
                  <p>
                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                    odio{" "}
                  </p>
                  <p>
                    <NavLink to="#">Read More</NavLink>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="product-item-sm d-flex">
                <div className="thumbnail">
                  <img
                    src="images/product-2.png"
                    alt="Image"
                    className="img-fluid"
                  />
                </div>
                <div className="pt-3">
                  <h3>Kruzo Aero Chair</h3>
                  <p>
                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                    odio{" "}
                  </p>
                  <p>
                    <NavLink to="#">Read More</NavLink>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="product-item-sm d-flex">
                <div className="thumbnail">
                  <img
                    src="images/product-3.png"
                    alt="Image"
                    className="img-fluid"
                  />
                </div>
                <div className="pt-3">
                  <h3>Ergonomic Chair</h3>
                  <p>
                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                    odio{" "}
                  </p>
                  <p>
                    <NavLink to="#">Read More</NavLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Popular Product -->

		<!-- Start Testimonial Slider --> */}
      <Testimonials />
      {/* <!-- End Testimonial Slider -->

		<!-- Start Blog Section --> */}
      <div classNameName="blog-section ">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6">
              <h2 className="section-title">Recent Blog</h2>
            </div>
            <div className="col-md-6 text-start text-md-end">
              <NavLink to="#" className="more">
                View All Posts
              </NavLink>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div className="post-entry">
                <NavLink to="#" className="post-thumbnail">
                  <img
                    src="images/post-1.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </NavLink>
                <div className="post-content-entry">
                  <h3>
                    <NavLink to="#">First Time Home Owner Ideas</NavLink>
                  </h3>
                  <div class="meta">
                    <span>
                      by <NavLink to="#">Kristin Watson</NavLink>
                    </span>{" "}
                    <span>
                      on <NavLink to="#">Dec 19, 2021</NavLink>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div className="post-entry">
                <NavLink to="#" className="post-thumbnail">
                  <img
                    src="images/post-2.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </NavLink>
                <div className="post-content-entry">
                  <h3>
                    <NavLink to="#">How To Keep Your Furniture Clean</NavLink>
                  </h3>
                  <div className="meta">
                    <span>
                      by <NavLink to="#">Robert Fox</NavLink>
                    </span>{" "}
                    <span>
                      on <NavLink to="#">Dec 15, 2021</NavLink>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div className="post-entry">
                <NavLink to="#" class="post-thumbnail">
                  <img
                    src="images/post-3.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </NavLink>
                <div className="post-content-entry">
                  <h3>
                    <NavLink to="#">Small Space Furniture Apartment Ideas</NavLink>
                  </h3>
                  <div className="meta">
                    <span>
                      by <NavLink to="#">Kristin Watson</NavLink>
                    </span>{" "}
                    <span>
                      on <NavLink to="#">Dec 12, 2021</NavLink>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
