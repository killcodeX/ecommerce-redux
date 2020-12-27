import React from "react";
import { Link } from "react-router-dom";
import { userLogout } from "../redux/actions/actions";
import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    user,
    isloading,
  } = useAuth0();

  const imgStyle = {
    width:'12%', height:'20%', borderRadius:'50%', objectFit:'cover', marginLeft:'15px'
  }

  const isUser = isAuthenticated && user;


  return (
    <nav className="navbar fixed navbar-expand-lg navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/product">
          YourShop
        </Link>
        <div className="ml-auto">
          {isUser ? (
            <div>
              <Link
                className="nav-item"
                to="/cart"
                style={{ textDecoration: "none" }}
              >
                <i className="fas fa-shopping-cart"></i>
              </Link>
              {isUser && user.picture && <img src={user.picture} alt={user.name} style={imgStyle} />}
              <button
                className="nav-item btn-cart-rem ml-3"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Log Out
              </button>
            </div>
          ) : (
            <button
              className="nav-item btn-buy"
              onClick={() => loginWithRedirect()}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
