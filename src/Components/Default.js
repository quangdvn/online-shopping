import React, { Component } from "react";

export default class Default extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-uppercase pt-5">
            <h1 className="text-title display-3 text-danger">404 error</h1>
            <h2>Page Not Found</h2>
            <h4>
              the requested URL
              <span className="text-danger">
                {" "}
                {this.props.location.pathname}
              </span>{" "}
              was not found
            </h4>
          </div>
        </div>
      </div>
    );
  }
}
