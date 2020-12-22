import React from "react";

export default function footer() {
  return (
    <footer className="footer bg-dark text-white">
      <div className="container">
        <div className="row pt-3 mt-5">
          <div className="col-12 brdr">
            <p style={{ fontWeight: "bold" }}>
              Developed By:{" "}
              <a
                href="https://aaquib.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{textDecoration:'none', color:'white'}}
              >
                Aaquib Ahmed
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
