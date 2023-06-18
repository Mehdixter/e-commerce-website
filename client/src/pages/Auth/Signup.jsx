import React, { useEffect } from "react";
import { Link, NavLink, useOutletContext } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const SignUp = ({ image, title, caption }) => {
  const { setImage, setTitle, setCaption } = useOutletContext();

  useEffect(() => {
    setImage(image);
    setTitle(title);
    setCaption(caption);
  }, [setImage, image]);

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
    <>
      <form action="#" className="pt-3" onSubmit={handleSubmit}>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Full Name"
            value={register.name}
            onChange={changeData}
            name="name"
          />
          <label htmlFor="name">Full Name</label>
        </div>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="info@example.com"
            value={register.email}
            onChange={changeData}
            name="email"
          />
          <label htmlFor="email">Email Address</label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={register.password}
            onChange={changeData}
            name="password"
          />
          <label htmlFor="password">Password</label>
        </div>

        <div className="d-flex justify-content-between">
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="remember" />
            <label htmlFor="remember" className="form-check-label">
              I agree to the <a href="#">Terms of Service</a> and{" "}
              <a href="#">Privacy Policy</a>
            </label>
          </div>
        </div>

        <div className="d-grid mb-4">
          <button type="submit" className="btn btn-primary">
            Create an account
          </button>
        </div>

        <div className="mb-2">
          Already a member?
          <Link to="/login"> Log in</Link>
        </div>
      </form>
    </>
  );
};

export default SignUp;
