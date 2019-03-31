import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import { ProductConsumer } from "../../ProductContext";
import CartTotal from './CartTotal';

/**
 * * The father component of all Cart Components
 */
export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { myCart } = value;
            if (myCart.length > 0) {
              return (
                <React.Fragment>
                  <Title brand="My" title="cart" />
                  <CartColumns />
                  <CartList listValue={value} />
                  <CartTotal totalValue={value} shoppingHistory={this.props.history}/>
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
