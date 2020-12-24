import React,{useState} from "react";

export default function PaymentCard() {
    const [loader, setLoader] = useState(false);

    const handlePayment = () => {
        setLoader(true);
        setTimeout(() => {
          setLoader(false);
        }, 2000);
      };
  return (
    <div className="col-12">
      <h3 className="mt-3 mb-3">Total Amount</h3>
      <hr />
      <div className="card card-payment cart-card mb-3">
        <div className="payment-details">
          <p>
            <strong>No of Items buying : </strong>2
          </p>
          <p>
            <strong>Total Cost : </strong>2
          </p>
        </div>
        <button
          type="button"
          className="btn-cart"
          style={{ textDecoration: "none" }}
          onClick={() => handlePayment()}
        >
          {loader ? (
            "loading..."
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
