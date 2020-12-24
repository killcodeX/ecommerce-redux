import React from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {userLogout} from '../redux/actions/actions';

export default function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const loggedIn = useSelector((state) => state.Auth.loggedIn);

  return (
    <nav className="navbar fixed navbar-expand-lg navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          YourShop
        </Link>
        <div className="ml-auto">
          {loggedIn ? (
            <>
              <Link
                className="nav-item"
                to="/cart"
                style={{ textDecoration: "none" }}
              >
                <i className="fas fa-shopping-cart"></i>
              </Link>
              <button className="nav-item ml-3" onClick={() => dispatch(userLogout())}>Log Out</button>
            </>
          ) : (
            <Link
              className="nav-item"
              to="/login"
              style={{ textDecoration: "none" }}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
