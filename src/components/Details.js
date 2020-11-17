import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(val) => {
          const { id, company, img, info, price, title, inCart } = val.detailProduct;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <img src={img} alt="Product image" className="img-fluid" />
                </div>

                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>Model: {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    Made by: <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price: <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3mb-0">Details: </p>
                  <p className="text-muted lead">{info}</p>
                  <div>
                    <span style={{ fontWeight: "bold" }} className="mr-5">
                      Add To Cart:{" "}
                    </span>
                    <button className="cartBtn">
                      <span className="cartMinus" onClick={() => val.removeFromCart(id, false)}>
                        &ndash;
                      </span>
                      <span className="cartCount">{val.detailProduct.count}</span>
                      <span className="cartPlus" onClick={() => val.addToCart(id)}>
                        +
                      </span>
                    </button>
                    <br />
                    <br />
                    <Link to="/">
                      <ButtonContainer>back to products</ButtonContainer>
                    </Link>
                    <ButtonContainer className="ml-1" onClick={() => val.removeFromCart(id, true)}>
                      clear item
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
