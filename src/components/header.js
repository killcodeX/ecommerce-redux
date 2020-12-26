import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../redux/actions/actions";

export default function Header() {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.Auth.loggedIn);

  const handleLogOut = () => {
    dispatch(userLogout());
  };

  return (
    <nav className="navbar fixed navbar-expand-lg navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          YourShop
        </Link>
        <div className="ml-auto">
          {loggedIn ? (
            <div>
              <Link
                className="nav-item"
                to="/cart"
                style={{ textDecoration: "none" }}
              >
                <i className="fas fa-shopping-cart"></i>
              </Link>
              <button
                className="nav-item btn-cart-rem ml-3"
                onClick={handleLogOut}
              >
                Log Out
              </button>
            </div>
          ) : (
            <Link
              className="nav-item"
              to="/sign-in"
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
