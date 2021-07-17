import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/actions";
import { Product, Spinner } from "../components";

export default function DisplayProducts() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.Products.Products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  
  if(data.length > 0){
    return (
      <section className="section height-100">
        <div className="container">
          <div className="row">
            {data.map((d) => {
              return <Product data={d} key={d._id} />;
            })}
          </div>
        </div>
      </section>
    );
  } else {
    return <Spinner/>
  }
}
