import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: JSON.parse(JSON.stringify(storeProducts)),
    detailProduct,
    cart: [],
    bill: 0,
  };

  getItem = (id) => {
    return this.state.products.find((item) => item.id === id);
  };

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  //   SHALLOW CLONING

  addToCart = (id) => {
    let products = this.state.products.slice();
    let product = products[id - 1];
    product.count++;
    product.total += product.price;
    let bill = this.state.bill + product.price;
    if (!product.inCart) {
      product.inCart = true;
      this.setState({ cart: [...this.state.cart, product], bill });
    } else {
      this.setState({ cart: [...this.state.cart], bill });
    }
  };

  removeFromCart = (id, clear) => {
    let products = this.state.products.slice();
    let product = products[id - 1];
    if (!product.inCart) return;
    product.count--;
    product.total -= product.price;
    let bill = this.state.bill - product.price;
    let cart = [...this.state.cart];
    if (product.count === 0 || clear) {
      product.inCart = false;
      product.count = 0;
      bill -= product.total;
      product.total = 0;
      cart = cart.filter((item) => item.id !== id);
    }
    this.setState({ cart, bill });
  };

  clearCart = () => {
    let cart = this.state.cart;
    for (let product of cart) {
      product.total = 0;
      product.count = 0;
      product.inCart = false;
    }
    this.setState({ cart: [], bill: 0 });
  };

  //   DEEP CLONE
  // addToCart = (id) => {
  //   let cart = JSON.parse(JSON.stringify(this.state.cart));
  //   let index = -1;
  //   for (let i = 0; i < cart.length; i++) {
  //     if (cart[i].id === id) {
  //       index = i;
  //       break;
  //     }
  //   }
  //   let products = JSON.parse(JSON.stringify(this.state.products));
  //   if (index === -1) {
  //     let product = JSON.parse(JSON.stringify(products[id - 1]));
  //     product.inCart = true;
  //     product.count++;
  //     product.total += product.price;
  //     products[id - 1] = JSON.parse(JSON.stringify(product));
  //     cart.push(JSON.parse(JSON.stringify(product)));
  //     this.setState({
  //       cart: JSON.parse(JSON.stringify(cart)),
  //       detailProduct: JSON.parse(JSON.stringify(product)),
  //       products: JSON.parse(JSON.stringify(products)),
  //     });
  //   } else {
  //     let product = JSON.parse(JSON.stringify(cart[index]));
  //     product.count++;
  //     product.total += product.price;
  //     products[id - 1] = JSON.parse(JSON.stringify(product));
  //     cart[index] = JSON.parse(JSON.stringify(product));
  //     this.setState({
  //       cart: JSON.parse(JSON.stringify(cart)),
  //       detailProduct: JSON.parse(JSON.stringify(product)),
  //       products: JSON.parse(JSON.stringify(products)),
  //     });
  //   }
  // };

  // removeFromCart = (id) => {
  //   let products = JSON.parse(JSON.stringify(this.state.products));
  //   if (products[id - 1].count === 0) return;
  //   if (products[id - 1].count === 1) {
  //     let product = JSON.parse(JSON.stringify(products[id - 1]));
  //     product.count = 0;
  //     product.total = 0;
  //     product.inCart = false;
  //     products[id - 1] = JSON.parse(JSON.stringify(product));
  //     let cart = JSON.parse(JSON.stringify(this.state.cart));
  //     cart = cart.filter((item) => item.id !== id);
  //     this.setState({
  //       cart: JSON.parse(JSON.stringify(cart)),
  //       detailProduct: JSON.parse(JSON.stringify(product)),
  //       products: JSON.parse(JSON.stringify(products)),
  //     });
  //   } else {
  //     let product = JSON.parse(JSON.stringify(products[id - 1]));
  //     product.count--;
  //     product.total -= product.price;
  //     products[id - 1] = JSON.parse(JSON.stringify(product));
  //     let cart = JSON.parse(JSON.stringify(this.state.cart));
  //     let index = -1;
  //     for (let i = 0; i < cart.length; i++) {
  //       if (cart[i].id === id) {
  //         index = i;
  //         break;
  //       }
  //     }
  //     cart[index] = JSON.parse(JSON.stringify(product));
  //     this.setState({
  //       cart: JSON.parse(JSON.stringify(cart)),
  //       detailProduct: JSON.parse(JSON.stringify(product)),
  //       products: JSON.parse(JSON.stringify(products)),
  //     });
  //   }
  // };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          removeFromCart: this.removeFromCart,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
