import React from "react";
import { BlueButton } from "../StyledComponents/Button";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-center">
          <h1 className=" text-title">Sorry, your cart is currently empty !!!</h1>
          <Link to="/">
            <BlueButton className="text-s mt-3">
              It's boring here! Let me go back to shopping
            </BlueButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
