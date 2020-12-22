import React, { useState } from "react";

export default function AddtoCart(props) {
  const { id } = props;
  const [addCart, setAddCart] = useState(0);

  const add = (element) => {
      if(element == '+'){
          setAddCart(addCart + 1);
          console.log(id); 
      } else if(element == '-') {
          if(addCart > 0){
              setAddCart(addCart - 1)
              console.log(id);
          }
      }
  }
  return (
    <div className="add-cart">
      <button className="add-cart-btn" onClick={() => add('+')}>
      <i className="fas fa-plus"></i>
      </button>
      <p className="add-cart-p">{addCart}</p>
      <button
        className="add-cart-btn"
        onClick={() => add('-')}
      >
       <i className="fas fa-minus"></i>
      </button>
    </div>
  );
}
