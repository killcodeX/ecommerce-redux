import React, { useState } from "react";

export default function AddtoCart() {
  const [addCart, setAddCart] = useState(0);
  return (
    <div className="add-cart">
      <button className="add-cart-btn" onClick={() => setAddCart(addCart + 1)}>+</button>
      <p className="add-cart-p">{addCart}</p>
      <button className="add-cart-btn" onClick={() => setAddCart( addCart <=0 ? addCart : addCart - 1)}>-</button>
    </div>
  );
}
