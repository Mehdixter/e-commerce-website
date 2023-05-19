import React from "react";
import { NavLink } from "react-router-dom";
const SignUp = () => {
  return (
    <div>
      <div className="site-wrap d-md-flex align-items-stretch justify-content-center">
        <div
          className="bg-img"
        ></div>
        <div className="form-wrap">
          <div className="form-inner">
            <h1 className="title">Sign up</h1>
            <p className="caption mb-4">Create your account in seconds.</p>

            <form action="#" className="pt-3">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Full Name"
                />
                <label for="name">Full Name</label>
              </div>

              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="info@example.com"
                />
                <label for="email">Email Address</label>
              </div>

              <div className="form-floating">
                <span className="password-show-toggle js-password-show-toggle">
                  <span className="uil"></span>
                </span>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
                <label for="password">Password</label>
              </div>

              <div className="d-flex justify-content-between">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="remember"
                  />
                  <label for="remember" className="form-check-label">
                    I agree to the <a href="#">Terms of Service</a> and{" "}
                    <NavLink to="#">Privacy Policy</NavLink>
                  </label>
                </div>
              </div>

              <div className="d-grid mb-4">
                <button type="submit" className="btn btn-primary">
                  Create an account
                </button>
              </div>

              <div className="mb-2">
                Already a member? <NavLink to="/Login">Log in</NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
