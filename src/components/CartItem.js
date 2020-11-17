import React from "react";

export default function CartItem({ product, val }) {
  const { id, title, img, price, total, count } = product;
  return (
    <div className="row my-1 text-capitalize text-center align-items-center">
      <div className="col-10 mx-auto col-lg-2">
        <img src={img} alt="product" style={{ width: "5rem", height: "5rem" }} className="img-fluid" />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Product: </span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Price </span>
        {price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-red mx-1" onClick={() => val.removeFromCart(id, false)}>
              &ndash;
            </span>
            <span className="btn btn-black mx-1 font-weight-bold">{count}</span>
            <span className="btn btn-green mx-1" onClick={() => val.addToCart(id)}>
              +
            </span>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div onClick={() => val.removeFromCart(id, true)}>Trash</div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>
          <span className="d-lg-none">Item Total: </span> $ {total}
        </strong>
      </div>
    </div>
  );
}
