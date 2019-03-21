/**
 * Title for every webpage
 */
import React from "react";

export default function Title({ brand, title }) {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-2 text-center text-title">
        <h1 className="text-capitalize font-weight-bold">
          {brand} <strong className="text-blue">{title}</strong>
        </h1>
      </div>
    </div>
  );
}
