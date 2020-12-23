import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/actions";
import data from "../mockProducts";
import { Product } from "../components";

export default function DisplayProducts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          {data.map((d, i) => {
            return <Product data={d} key={i} />;
          })}
        </div>
      </div>
    </section>
  );
}
