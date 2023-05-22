import React from "react";
// import "./style.css"
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //send POST request to laravel
    const handleSubmit = (event)=>{
        event.preventDefault();

        axios.post('',{email,password});
    }

  return (
    <div className="site-wrap d-flex align-items-stretch justify-content-center">
      <div className="bg-img "></div>
      <div className="form-wrap">
        <div className="form-inner">
          <h1 className="title text-center">Login</h1>
          <p className="caption mb-4">
            Please enter your login details to sign in.
          </p>

          <form action="#" className="pt-3 m-auto">
            <div className="form-floating">
              <input
                type="email"
                value={email}
                onChange={(event)=>setEmail(event.target.value)}
                required
                className="form-control form-control-lg "
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
                value={password}
                onChange={(event)=>setPassword(event.target.value)}
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
                  Keep me logged in
                </label>
              </div>
              <div>
                <NavLink to="#">Forgot password?</NavLink>
              </div>
            </div>

            <div className="d-grid mb-4">
              <button type="submit" className="btn btn-primary">
                Log in
              </button>
            </div>

            <div className="mb-2">
              Don’t have an account? <NavLink to="/SignUp">Sign up</NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
