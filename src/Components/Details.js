import React, { Component } from "react";
import { ProductConsumer } from "../ProductContext";
import { Link } from "react-router-dom";
import { BlueButton, YellowButton } from "./StyledComponents/Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* Title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-blue my-5 ">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* End Title */}

              {/* Product Info */}
              <div className="row">
                {/* Product Image */}
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                {/* End of Product Image */}

                {/* Product Text */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>model: {title}</h2>
                  <h4 className="text-uppercase mt-3 mb-2">
                    Made by:{" "}
                    <span className="text-title text-uppercase text-muted">
                      {company}
                    </span>
                  </h4>
                  <h4 className="text-uppercase mt-3 mb-2">
                    Price: <span className="text-danger">${price}</span>
                  </h4>
                  <h4 className="text-uppercase mt-3 mb-2">
                    Some information about this product:
                  </h4>
                  <p className="text-muted lead">{info}</p>
                  {/* End of Product Text */}

                  {/* Function Button */}
                  <Link to="/">
                    <BlueButton className="text-s">
                      Back to main page
                    </BlueButton>
                  </Link>
                  <YellowButton
                    className="text-s"
                    onClick={() => {
                      value.addToCart(id);
                      value.openPopUp(id);
                    }}
                    disabled={inCart ? true : false}
                  >
                    {inCart ? "in cart" : "add to cart"}
                  </YellowButton>
                  {/* End of Function Button */}
                </div>
              </div>
              {/* End of Product Info */}
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
