import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";

export default class ProductList extends Component {
  state = {
    products: [],
  };

  render() {
    return (
      <React.Fragment>
        <div className="py-5"></div>
        <div className="container">
          <Title name="our" title="products"></Title>
          <div className="row">
            <ProductConsumer>
              {(val) => {
                return val.products.map((product) => {
                  return <Product key={product.id} product={product}></Product>;
                });
              }}
            </ProductConsumer>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
