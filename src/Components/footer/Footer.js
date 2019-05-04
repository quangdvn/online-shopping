import React, {Component} from 'react'
import {Link} from 'react-router-dom'
export default class Footer extends Component {
    render() {
        return (
            <div className="section bg-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <h6 className="footer-heading text-uppercase text-white">
                                Information
                            </h6>
                            <ul className="list-unstyled footer-link mt-4">
                                <li>
                                    <Link to="/"> Pages</Link>
                                </li>
                                <li>
                                    <Link to="/">Our team</Link>
                                </li>
                                <li>
                                    <a href="/">Pricing</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <div className="">
                                <h6 className="footer-heading text-uppercase text-white">
                                    Address
                                </h6>
                                <ul className="list-unstyled footer-link mt-4">
                                    <p className="contact-info mt-4">
                                        <i className="fas fa-map-marker-alt" />{' '}
                                        Somewhere in Viet Nam
                                    </p>
                                    <p className="contact-info mt-4">
                                        <i className="fas fa-phone" /> 0123456789
                                    </p>
                                    <p className="contact-info mt-4">
                                        <i className="fas fa-envelope-square" />{' '}
                                        undefined@gmail.com
                                    </p>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <h6 className="footer-heading text-uppercase text-white">
                                Contact Us
                            </h6>
                            <p className="contact-info mt-4">
                                Feel free to contact us
                            </p>
                            <p className="contact-info">unknown@gmail.com</p>
                            <div className="mt-5">
                                <ul className="list-inline">
                                    <li className="list-inline-item iconContainer">
                                        <Link to="/">
                                            <i className="fab facebook footer-social-icon fa-facebook-f" />
                                        </Link>
                                    </li>
                                    <li className="list-inline-item iconContainer">
                                        <Link to="/">
                                            <i className="fab twitter footer-social-icon fa-twitter" />
                                        </Link>
                                    </li>
                                    <li className="list-inline-item iconContainer">
                                        <Link to="/">
                                            <i className="fab google footer-social-icon fa-google" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-5">
                    <p className="footer-alt mb-0 f-14">
                        2019 © Sitib, All Rights Reserved
                    </p>
                </div>
            </div>
        )
    }
}
