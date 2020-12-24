import React, { useEffect } from "react";
import { CartCard, PaymentCard } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { cartProduct } from "../redux/actions/actions";

export default function Cart() {
  const dispatch = useDispatch();
  const buyProduct = useSelector((state) => state.Products.buyProduct);
  const totalItem = useSelector((state) => state.Products.TotalProduct);

  useEffect(() => {
    dispatch(cartProduct());
  }, []);

  return (
    <section className="section height-100">
      <div className="container">
        <h2 className="mt-3 mb-3">Your Cart</h2>
        <hr />
        <div className="row">
          <PaymentCard />
          <div className="col-12">
            <h3 className="mt-3 mb-3">Selected Products</h3>
            <hr />
            {totalItem.length !== 0 ? (
              totalItem.map((Data) => {
                const totalSelected = buyProduct.filter(
                  (item) => item.id !== Data.id
                );
                return (
                  <CartCard
                    key={Data.id}
                    Data={Data}
                    totalSelected={totalSelected}
                  />
                );
              })
            ) : (
              <h2 className="brdr">No Item Selected</h2>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
