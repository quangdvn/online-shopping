/**
 * Display the card of information about every product
 */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../ProductContext";
import PropTypes from "prop-types";
import { ProductCard } from "./StyledComponents/ProductCard";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.productInfo;
    return (
      <ProductCard className="col-9 mx-auto col-md-6 col-lg-3 my-3 ">
        <div className="card">
          {/* Card image */}
          <ProductConsumer>
            {value => (
              <div
                className="img-container img-fluid p-5"
                onClick={() => value.handleDetail(id)}
              >
                <Link to={`/details/${value.SEO_URLConverter(title)}.${id}`}>
                  <img src={img} alt="product" className="card-img-top" />
                </Link>
                <button
                  className="card-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openPopUp(id);
                  }}
                >
                  {inCart ? (
                    <p className="text-capitalize mb-0" disabled>
                      in Cart
                    </p>
                  ) : (
                    <i className="fa fa-cart-plus" aria-hidden="true" />
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
          {/* End of Card image */}

          {/* Card footer */}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">$</span>
              {price}
            </h5>
          </div>
          {/* End of Card footer */}
        </div>
      </ProductCard>
    );
  }
}
/**
 * To ensure that the database is fixed with various types of data
 */
Product.propTypes = {
  productInfo: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};
