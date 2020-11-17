import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart, count } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <ProductConsumer>
          {(val) => {
            return (
              <Link to="/details" style={{ textDecoration: "none" }}>
                <div className="card">
                  <div className="img-container p-5" onClick={() => val.handleDetail(id)}>
                    <img src={img} alt="Product Image" className="card-img-top" />
                    <p className="card-btn" style={{ display: inCart ? "block" : "none" }}>
                      <span className="text-capitalize mb-0">{count}</span>
                    </p>
                  </div>
                  <div className="card-footer d-flex justify-content-between">
                    <p className="align-self-center mb-0">{title}</p>
                    <h5 className="text-blue font-italic mb-0">
                      <span className="mr-1">$</span>
                      {price}
                    </h5>
                  </div>
                </div>
              </Link>
            );
          }}
        </ProductConsumer>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.3s ease-in-out;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    text-decoration: none !important;
    transition: all 0.3s ease-in-out;
  }

  .img-container {
    position: relative;

    &:hover {
      .card-img-top {
        transform: scale(1.2);
      }

      .card-btn {
        transform: translate(0, 0);
      }
    }
  }

  .card-img-top {
    transition: all 0.3s ease-in-out;
  }

  .card-btn {
    position: absolute;
    top: -20px;
    right: -20px;
    padding: 10px 15px;
    background: #d35400;
    border: none;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
    margin: 0;
    color: white;
    font-weight: bold;
  }

  &:hover {
    .card {
      box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.4);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
`;
