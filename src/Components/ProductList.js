/**
 * Hold information about every product
 */
import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../ProductContext";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title brand="Trending" title="Products" />
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(eachProduct => {
                    return (
                      <Product key={eachProduct.id} productInfo={eachProduct} />
                    );
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
