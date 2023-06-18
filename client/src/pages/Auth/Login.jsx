import React, { useEffect } from "react";
import "../../style.css";
import { Link, NavLink, useOutletContext } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function Login({ image, title, caption }) {
  const { setImage, setTitle, setCaption } = useOutletContext();

  useEffect(() => {
    setImage(image);
    setTitle(title);
    setCaption(caption);
  }, [setImage, image, setTitle, setCaption, title, caption]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //send POST request to laravel
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("", { email, password });
  };

  return (
    <>
      <form action="#" className="pt-3">
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
            <input type="checkbox" className="form-check-input" id="remember" required/>
            <label for="remember" className="form-check-label">
              Keep me logged in
            </label>
          </div>
          <div>
            <a href="#">Forgot password?</a>
          </div>
        </div>

        <div className="d-grid mb-4">
          <button type="submit" className="btn btn-primary">
            Log in
          </button>
        </div>

        <div className="mb-2">
          Don’t have an account?
          <Link to="/signup"> Sign up</Link>
        </div>
      </form>
    </>
  );
}

export default Login;
