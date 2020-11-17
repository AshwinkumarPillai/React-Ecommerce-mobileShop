import React from "react";
import CartItem from "./CartItem";

export default function CartTable({ val }) {
  return (
    <div className="container-fluid">
      {val.cart.map((item) => {
        return <CartItem key={item.id} product={item} val={val} />;
      })}
    </div>
  );
}
