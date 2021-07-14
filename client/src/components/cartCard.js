import React from "react";
import { useDispatch } from "react-redux";
import {
  removefromCart,
  totalAmount,
  totalproductToBuy,
} from "../redux/actions/actions";

export default function CartCard(props) {
  const dispatch = useDispatch();
  const { Data, totalSelected } = props;

  const handleDispatch = () => {
    dispatch(removefromCart(Data.id));
    dispatch(totalAmount());
    dispatch(totalproductToBuy());
  };

  return (
    <div className="card shadow cart-card mb-3" key={Data.id}>
      <div className="row">
        <div className="col-sm-12 col-lg-6 brdr">
          <img className="cart-image" src={Data.image} alt={Data.tile} />
        </div>
        <div className="col-sm-12 col-lg-6 pt-3">
          <h4 className="pb-4">{Data.title}</h4>
          <p>
            <strong>No of Items : </strong>
            {totalSelected[0].numberOfProduct}
          </p>
          <p>
            <strong>Price : </strong>$ {Data.price}
          </p>
          <p>
            <strong> Total Price : </strong>${" "}
            {Data.price * totalSelected[0].numberOfProduct}
          </p>
          <button
            type="button"
            className="btn-cart-rem"
            style={{ textDecoration: "none" }}
            onClick={() => handleDispatch()}
          >
            Remove from cart <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
