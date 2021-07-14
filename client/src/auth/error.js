import React from "react";
import { Link } from "react-router-dom";

export default function error() {
  return (
    <section className="section height-100 error-pa">
      <h1>404</h1>
      <h3 className='mb-4'>sorry, page you tried cannot be found</h3>
      <Link to="/" className="btn btn-primary">
        Back Home
      </Link>
    </section>
  );
}
