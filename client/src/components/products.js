import React from "react";
import {Link} from 'react-router-dom';
export default function Products(props) {
  const { data } = props;

  return (
    <div className="col-sm-12 col-lg-3 mb-4">
      <Link to={`/product/${data._id}`} style={{ textDecoration: 'none' }}>
        <div className="card shadow product-card">
          <div className="card-head ">
            <img src={data.image} alt={data.title} />
            <div className="card-detail pt-4">
              <p className="font-weight-bold">{data.title}</p>
              <p>
              <strong>Category : </strong>
              <span className="text-muted">{data.category}</span>
            </p>
            <p className="mt-3 font-weight-bold">{"$" + data.price}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
