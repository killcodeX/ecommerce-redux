import React from "react";

export default function footer() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12 brdr">
          <p style={{ fontWeight: "bold" }}>
            Developed By:{" "}
            <a
              href="https://aaquib.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aaquib Ahmed
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
