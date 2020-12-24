import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function PaymentCard() {
  const ToTalItemBuy = useSelector((state) => state.Products.TotalProductBuy);
  const ToTalItemCost = useSelector((state) => state.Products.TotalAmount);
  const [loader, setLoader] = useState(false);
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);

  const handlePayment = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  };

  if(paymentSuccessful){
      alert('Payment Successful!! 🤩')
  }
  return (
    <div className="col-12">
      <h3 className="mt-3 mb-3">Total Amount</h3>
      <hr />
      <div className="card card-payment shadow cart-card mb-3">
        <div className="payment-details">
          <p>
            <strong>No of Items buying : </strong>
            {ToTalItemBuy}
          </p>
          <p>
            <strong>Total Cost : </strong>${" "}
            {ToTalItemCost}
          </p>
        </div>
        <button
          type="button"
          className="btn-cart"
          style={{ textDecoration: "none" }}
          onClick={() => handlePayment()}
        >
          {loader ? (
            "Paying..."
          ) : (
            <span>
              Proceed To Pay <i className="far fa-credit-card"></i>
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
