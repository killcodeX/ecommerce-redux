import React, { useState } from "react";
import { Link } from "react-router-dom";
import Data from "../mockSingleProduct";

export default function Cart() {
  const [loader, setLoader] = useState(false);

  const handlePayment = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  };

  return (
    <section className="section height-100">
      <div className="container">
        <h2 className="mt-3 mb-3">Your Cart</h2>
        <hr />
        <div className="row">
          <div className="col-12">
            <div className="card cart-card">
              <div className="row">
                <div className="col-sm-12 col-lg-6 brdr">
                  <img
                    className="cart-image"
                    src={Data.image}
                    alt={Data.tile}
                  />
                </div>
                <div className="col-sm-12 col-lg-6 pt-3">
                  <h4 className="pb-4">{Data.title}</h4>
                  <p>
                    <strong>No of Items : </strong>2
                  </p>
                  <p>
                    <strong> Total Price : </strong>
                    {"$" + Data.price}
                  </p>
                  <div className="buy-rem">
                    <button
                      type="button"
                      className="btn-cart"
                      style={{ textDecoration: "none" }}
                      onClick={() => handlePayment()}
                    >
                      {loader? 'loading...' : <span>Proceed To Pay <i className="far fa-credit-card"></i></span>}
                    </button>
                    <button
                      type="button"
                      className="btn-cart-rem ml-3"
                      style={{ textDecoration: "none" }}
                    >
                      Remove from cart <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
