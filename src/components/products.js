import React, { useState } from "react";
import {AddToCart} from '../components';
import { Collapse, Button } from "react-bootstrap";

export default function Products(props) {

  const {data} = props;
  const [open, setOpen] = useState(false);

  return (
    <div className="col-sm-12 col-lg-3 mb-4">
      <div className="card shadow">
        <div className="card-head ">
          <img src={data.image} alt={data.title} />
          <div className="card-detail pt-4">
            <p className='font-weight-bold'>{data.title}</p>
            <Button
                className='coll-btn'
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              {open? 'Read Less':'Read Description'}
            </Button>
            <Collpase data={data.description} open={open} />
          </div>
        </div>
        <div className='card-down'>
            <AddToCart/>
            <p className='mt-3 font-weight-bold'>{'$' + data.price}</p>
        </div>
      </div>
    </div>
  );
}

const Collpase = (props) => {
  return (
    <Collapse in={props.open}>
      <div id="example-collapse-text" className='text-muted mt-3'>{props.data}</div>
    </Collapse>
  );
};


