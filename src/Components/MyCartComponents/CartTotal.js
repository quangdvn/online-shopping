import React from "react";

export default function CartTotal({ totalValue }) {
  const { myCartSubTotal, myCartTax, myCartTotal, myCartClearAll } = totalValue;
  return (
    <React.Fragment>
      <div className="container ">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <button
              className="btn btn-outline-danger text-uppercase mb-3 px-5"
              type="button"
              onClick={() => myCartClearAll()}
            >
              clear cart
            </button>
            <h5>
              <span className="text-title">subtotal : </span>
              <strong>$ {myCartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">tax : </span>
              <strong>$ {myCartTax}</strong>
            </h5>

            <h5>
              <span className="text-title">total : </span>
              <strong>$ {myCartTotal}</strong>
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
