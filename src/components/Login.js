import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import ModalEmail from "./ModalEmail";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then((result) => {
        setError("");
        const user = result.user;
        console.log(user);

        form.reset();
      })
      .catch((er) => {
        setError(er.message);
        console.error(er);
      });
  };
  return (
    <div className="hero my-20 w-full">
      <div className="card w-96 mx-auto border-2 border-black py-20">
        <h1 className="text-5xl font-semibold text-center my-6">Log In</h1>

        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Your password"
              className="input input-bordered"
              required
            />
          </div>
          <label
            htmlFor="email-modal"
            className="label label-text-alt link link-hover"
          >
            Forgot password?
          </label>
          {error && (
            <div className="alert alert-error shadow-lg my-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{error}</span>
              </div>
            </div>
          )}
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Log In" />
          </div>
        </form>
        <p className="text-center">
          Don't have an account? Please{" "}
          <Link className="text-orange-600" to="/register">
            Register
          </Link>
        </p>
      </div>
      <ModalEmail></ModalEmail>
    </div>
  );
};

export default Login;
