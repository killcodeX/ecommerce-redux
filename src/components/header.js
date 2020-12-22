import React from "react";
import { Link } from "react-router-dom";

export default function header() {
  return (
    <nav className="navbar fixed navbar-expand-lg navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          YourShop
        </Link>
        <div className='ml-auto'>
            <Link className='nav-item' to='/cart' style={{ textDecoration: 'none' }}><i className="fas fa-shopping-cart"></i></Link>
            <Link className='nav-item ml-3' to='/'style={{ textDecoration: 'none' }}> User</Link>
        </div>
      </div>
    </nav>
  );
}
