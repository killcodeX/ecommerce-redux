import React, { useEffect } from "react";
import { AddToCart, Spinner } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../redux/actions/actions";

export default function ProductPage(props) {
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.Products.Product);
  console.log(Data)
  useEffect(() => {
    dispatch(getSingleProduct(props.match.params.id));
  }, []);

  if (Data) {
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
              {/* <div className="card-down"> */}
                <AddToCart id={Data.id} />
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return <Spinner />;
  }
}
