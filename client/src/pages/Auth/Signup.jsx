import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });
  function changeData(event) {
    setRegister((data) => ({
      ...data,
      [event.target.name]: event.target.value,
      [event.target.email]: event.target.value,
      [event.target.password]: event.target.value,
    }));
  }
  //send POST request to laravel
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name: register.name,
      email: register.email,
      password: register.password,
      password_confirmation: register.password,
    };

    axios
      .post("http://127.0.0.1:8000/api/register", data)
      .then((result) => {
        console.log(result.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="site-wrap col-lg-12 d-lg-flex align-items-stretch justify-content-center">
        <div className="bg-img"></div>
        <div className="form-wrap col-lg-5">
          <div className="form-inner text-center">
            <h1 className="title">Sign up</h1>
            <p className="caption mb-4">Create your account in seconds.</p>

            <form action="#" className="pt-3" onSubmit={handleSubmit}>
              <div className="form-floating">
                <input
                  type="text"
                  value={register.name}
                  onChange={changeData}
                  className="form-control form-control-lg"
                  id="name"
                  placeholder="Full Name"
                  name="name"
                />
                <label htmlFor="name">Full Name</label>
              </div>

              <div className="form-floating">
                <input
                  type="email"
                  value={register.email}
                  onChange={changeData}
                  className="form-control"
                  id="email"
                  placeholder="info@example.com"
                  name="email"
                />
                <label htmlFor="email">Email Address</label>
              </div>

              <div className="form-floating">
                <span className="password-show-toggle js-password-show-toggle">
                  <span className="uil"></span>
                </span>
                <input
                  type="password"
                  value={register.password}
                  onChange={changeData}
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  name="password"
                />
                <label htmlFor="password">Password</label>
              </div>

              <div className="d-flex justify-content-between">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="remember"
                  />
                  <label htmlFor="services" className="form-check-label">
                    I agree to the <NavLink to="#">Terms of Service</NavLink>{" "}
                    and <NavLink to="#">Privacy Policy</NavLink>
                  </label>
                </div>
              </div>

              <div className="d-grid mb-4">
                <button type="submit" className="btn btn-primary">
                  Create an account
                </button>
              </div>

              <div className="mb-2">
                Already a member? <NavLink to="/login">Log in</NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
