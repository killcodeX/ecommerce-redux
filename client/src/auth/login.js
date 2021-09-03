import React, { useState } from "react";
import { requestLogin } from "../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.Auth.isAuthenticated);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(requestLogin(email, password));
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <section
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/outdoor.png"})`,
        backgroundPosition:'center',
        backgroundRepeat:"no-repeat",
        backgroundSize: "contain",
      }}
      className="section height-100 brdr"
    >
      <div className="card shadow login login-card">
        <div className="auth-heading">Login Account</div>
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
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
        <div className="w-100 text-center mt-3">
          Don't Have an Account? {<Link to="/sign-up">Sign Up</Link>}
        </div>
      </div>
    </section>
  );
}
