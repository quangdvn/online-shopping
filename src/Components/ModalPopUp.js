import React, { Component } from "react";
import { ProductConsumer } from "../ProductContext";
import { BlueButton, YellowButton } from "./StyledComponents/Button";
import { Link } from "react-router-dom";
import { PopUpContainer } from "./StyledComponents/PopUp";

export default class ModalPopUp extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { popUpIsOpen, closePopUp } = value;
          const { img, title, price } = value.popUpProduct;
          if (!popUpIsOpen) {
            return null;
          } else {
            return (
              <PopUpContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="pop-up"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                    >
                      <h5>Item added to the cart</h5>
                      <img src={img} className="img-fluid" alt="product" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">price: $ {price}</h5>
                      <Link to="/">
                        <BlueButton
                          className="text-s"
                          onClick={() => closePopUp()}
                        >
                          Cool! Let me go back to shopping
                        </BlueButton>
                      </Link>
                      <Link to="/cart">
                        <YellowButton
                          className="text-s"
                          onClick={() => closePopUp()}
                        >
                          Let me see my cart
                        </YellowButton>
                      </Link>
                    </div>
                  </div>
                </div>
              </PopUpContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
