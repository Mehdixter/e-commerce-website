import React from "react";
import { NavLink } from "react-router-dom";
function NavBar() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/Shop" },
    { name: "About", href: "/About" },
    { name: "Contact", href: "/Contact" },
    { name: "Services", href: "/Services" },
    { name: "Login/SignUp", href: "/Login" },
  ];

  return (
    <div>
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
                    className={(isActive) => {
                      return (
                        "custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0 " +
                        (isActive
                          ? "nav-item active text-decoration-none custom-navbar-nav"
                          : "nav-link")
                      );
                    }}
                  >
                    {item.name}
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
                <NavLink className="nav-link" to="/Login">
                  <i class="fa-solid fa-user"></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </nav>
    </div>
  );
}

export default NavBar;
