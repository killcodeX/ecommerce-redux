import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { buyProduct } from "../redux/actions/actions";
import Notification from "./notification";

export default function AddtoCart(props) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const { id } = props;
  const [addCart, setAddCart] = useState(0);

  const add = () => {

    if(addCart > 0){
      const data = {
        id: id,
        numberOfProduct: addCart,
      };
      dispatch(buyProduct(data));
      setAddCart(0);
      setShow(!show);
    } else {
      alert('Please add Product !!')
    }
    
  };
  return (
    <div className="card-down">
      <div className="add-cart">
        <button
          className="add-cart-btn"
          onClick={() => setAddCart(addCart + 1)}
        >
          <i className="fas fa-plus"></i>
        </button>
        <p className="add-cart-p">{addCart}</p>
        <button
          className="add-cart-btn"
          onClick={() => setAddCart(addCart > 0 ? addCart - 1 : 0)}
        >
          <i className="fas fa-minus"></i>
        </button>
      </div>
      <button
        type="button"
        className="btn-buy"
        style={{ textDecoration: "none" }}
        onClick={() => add()}
      >
        <i className="fas fa-cart-plus"></i> Add To Cart
      </button>
      <Notification show={show} setShow={setShow} />
    </div>
  );
}