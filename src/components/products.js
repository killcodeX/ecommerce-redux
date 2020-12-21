import React, { useState } from "react";
import { Collapse, Button } from "react-bootstrap";

export default function Products(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="col-sm-12 col-lg-3 mb-4">
      <div className="card shadow">
        <div className="card-head ">
          <img src={props.data.image} alt={props.data.title} />
          <div className="card-detail pt-4">
            <p className='font-weight-bold'>{props.data.title}</p>
            <Button
                className='coll-btn'
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              {open? 'Read Less':'Read Description'}
            </Button>
            <Collpase data={props.data.description} open={open} />
          </div>
        </div>
        <div className='card-down'>
            <p>hi</p>
            <p>price</p>
        </div>
      </div>
    </div>
  );
}

const Collpase = (props) => {
  return (
    <Collapse in={props.open}>
      <div id="example-collapse-text text-muted mt-3">{props.data}</div>
    </Collapse>
  );
};
