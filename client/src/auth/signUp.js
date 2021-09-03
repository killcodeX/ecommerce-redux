import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { requestSignUp } from "../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";

export default function SignUp() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.Auth.isAuthenticated);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, confirmPassword);
      dispatch(requestSignUp(email, password));
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <section className="section height-100 brdr">
      <div className="card shadow login login-card">
        <img className="user-img" src="/user.jpg" alt="user" />
        <form onSubmit={handleSubmit}>
          <div className="form-group pt-4">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </form>
        <div className="w-100 text-center mt-3">
          Already Have an Account? {<Link to="/sign-in">Log In</Link>}
        </div>
      </div>
    </section>
  );
}
