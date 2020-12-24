import React from "react";

export default function Spinner() {
  return (
    <section className='section brdr height-100'>
        <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    </section>
  );
}
