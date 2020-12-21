import React from "react";
import { Link } from 'react-router-dom';

export default function error() {
  return (
    <div>
      <h1>404</h1>
      <h3>sorry, page you tried cannot be found</h3>
      <Link to="/" className="btn">
        Back Home
      </Link>
    </div>
  );
}
