import React, { Component } from "react";
import { ProductConsumer } from "../context";
import CartTable from "./CartTable";
import { Link } from "react-router-dom";

export default class Cart extends Component {
  render() {
    return (
      <ProductConsumer>
        {(val) => {
          if (val.cart.length > 0) {
            let subTotal = val.bill;
            let temp = val.bill * 0.18;
            let tax = Number.parseFloat(temp).toFixed(2);
            let sumTotal = parseInt(subTotal) + parseInt(tax);
            return (
              <React.Fragment>
                <div className="container-fluid mt-5">
                  <div className="row d-none d-lg-flex" style={{ borderBottom: "1px solid black" }}>
                    <div className="col-10 mx-auto col-lg-2  text-center">
                      <p className="text-uppercase">Product</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2  text-center">
                      <p className="text-uppercase">name of Product</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2  text-center">
                      <p className="text-uppercase">price</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2  text-center">
                      <p className="text-uppercase">quantity</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2  text-center">
                      <p className="text-uppercase">remove</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2  text-center">
                      <p className="text-uppercase">item Total</p>
                    </div>
                  </div>
                  <CartTable val={val} />;
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                      <Link to="/">
                        <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={() => val.clearCart()}>
                          Clear cart
                        </button>
                      </Link>
                      <h5>
                        <span className="text-title" style={{ color: "#2e86de" }}>
                          Sub Total:{" "}
                        </span>
                        <strong>$ {subTotal}</strong>
                      </h5>
                      <h5>
                        <span className="text-title" style={{ color: "#2e86de" }}>
                          Tax:{" "}
                        </span>
                        <strong>$ {tax}</strong>
                      </h5>
                      <h5>
                        <span className="text-title" style={{ color: "#2e86de" }}>
                          Total:{" "}
                        </span>
                        <strong>$ {sumTotal}</strong>
                      </h5>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          } else {
            return <h4 className="text-center mt-5">Yout cart is empty! Go to products tab to add products to cart</h4>;
          }
        }}
      </ProductConsumer>
    );
  }
}
