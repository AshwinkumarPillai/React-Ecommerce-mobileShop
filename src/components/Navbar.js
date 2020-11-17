import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../logo.svg";
import { ButtonContainer } from "./Button";
import { ProductConsumer } from "../context";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar bg-primary navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/" style={{ color: "black", fontSize: "40px" }}>
          <i class="fas fa-mobile"></i>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5"></li>
          <Link to="/" className="nav-link font-weight-bold">
            Products
          </Link>
        </ul>
        <ProductConsumer>
          {(val) => {
            let count = val.cart.length;
            return (
              <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                  <span className="totalCount" style={{ display: count > 0 ? "inline-block" : "none" }}>
                    {count}
                  </span>
                  <span className="mr-2">
                    <i class="fas fa-shopping-cart"></i>
                  </span>
                  My Cart
                </ButtonContainer>
              </Link>
            );
          }}
        </ProductConsumer>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  .nav-link {
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
