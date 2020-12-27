import React from "react";
import { Toast } from "react-bootstrap";

export default function notification(props) {
  const { show, setShow } = props;
  const toggleShow = () => setShow(!show);
  return (
    <div
      style={{
        position: "relative",
        minHeight: "0px",
        minWidth: "109px",
      }}
    >
      <Toast
        style={{
          position: "absolute",
          top: "-387px",
          right: "-60px",
          minWidth: "100px",
        }}
        show={show}
        onClose={toggleShow}
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">Notification</strong>
        </Toast.Header>
        <Toast.Body>Product added to Cart!</Toast.Body>
      </Toast>
    </div>
  );
}
