import React from "react";
import { Link } from "react-router-dom";
import Data from "../mockSingleProduct";
import { AddToCart } from "../components";

export default function ProductPage() {
  return (
    <section className="section height-100 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-6 brdr">
            <img className="product-image" src={Data.image} alt={Data.tile} />
          </div>
          <div className="col-sm-12 col-lg-6 pt-5">
            <h2 className="pb-4">{Data.title}</h2>
            <p>
              <strong>Category : </strong>
              <span className="text-muted">{Data.category}</span>
            </p>
            <p>
              <strong>Description : </strong>
              <span className="text-muted">{Data.description}</span>
            </p>
            <p>
              <strong>Price : </strong>
              {"$" + Data.price}
            </p>
            <div className="card-down">
              <AddToCart id={Data.id} />
              <button type="button" className="btn-buy" style={{textDecoration:'none'}}>
                <i className="fas fa-cart-plus"></i> Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
