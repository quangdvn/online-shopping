import React from "react";

export default function CartItem({ item, itemValue }) {
  const { id, title, img, price, total, count } = item;
  const { myCartIncrement, myCartDecrement, myCartRemoveItem } = itemValue;
  return (
    <div className="row my-1 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
          alt="product"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product : </span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product : </span>
        {price} $
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span
              className="btn btn-black mx-1"
              onClick={() => myCartDecrement(id)}
            >
              <i className="fas fa-minus" aria-hidden="true" />
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span
              className="btn btn-black mx-1"
              onClick={() => myCartIncrement(id)}
            >
              <i className="fas fa-plus" aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>
      {/* */}
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon">
          <i
            className="fas text-red fa-2x fa-trash-alt"
            aria-hidden="true"
            onClick={() => myCartRemoveItem(id)}
          />
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong> item total : $ {total}</strong>
      </div>
    </div>
  );
}
