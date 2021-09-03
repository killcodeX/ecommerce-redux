import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { requestSignUp } from "../redux/actions/authActions";
import { useDispatch } from "react-redux";

export default function SignUp() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password, mobile);
    //dispatch(requestSignUp(email, password));
  };

  return (
    <section
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/outdoor.png"})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
      className="section height-100 brdr"
    >
      <div className="card shadow login login-card">
        <div className="auth-heading">Create Account</div>
        <form onSubmit={handleSubmit}>
          <div className="row pt-4">
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="name">Enter Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="mobile">Phone no</label>
                <input
                  type="text"
                  className="form-control"
                  id="mobile"
                  placeholder="mobile no"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="form-group">
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
