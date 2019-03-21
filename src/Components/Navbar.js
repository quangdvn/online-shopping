/**
 * * Headline of the web, contain important information
 */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { BlueButton } from "./StyledComponents/Button";
import { LogoAnimate } from "./StyledComponents/Logo";
import { NavWrapper } from "./StyledComponents/NavWrapper";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <LogoAnimate>
            <img src={logo} alt="brand" className="navbar-brand" width="70px" />
          </LogoAnimate>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link text-s text-white">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto text-m">
          <BlueButton>
            <span className="mr-2">
              <i className="fas fa-shopping-cart" />
            </span>
            My Cart
          </BlueButton>
        </Link>
      </NavWrapper>
    );
  }
}
