import React, {Component} from 'react'
import fasServiceIcon from './img/fas-service-icon.png'
import freshFoodIcon from './img/fresh-food-icon.png'
import supportIcon from './img/support-icon.png'
import banner from './img/banner.jpg'
import {Link} from 'react-router-dom'

export default class Banner extends Component {
    render() {
        return (
            <div className="hero-banner">
                <div className="hero-wrapper">
                    <div className="hero-left">
                        <h1 className="hero-title">
                            Sneaker your <br /> best friend
                        </h1>
                        <div className="d-sm-flex flex-wrap">
                            <Link
                                className="button button-hero button-shadow"
                                to="/">
                                Buy Now
                            </Link>
                            <a
                                className="hero-banner__video"
                                href="https://www.youtube.com/watch?v=hqaUF2JNY_U">
                                Watch Video
                            </a>
                        </div>
                        <ul className="hero-info d-none d-lg-block">
                            <li>
                                <img src={fasServiceIcon} alt="" />
                                <h4>Fast Service</h4>
                            </li>
                            <li>
                                <img src={freshFoodIcon} alt="" />
                                <h4>Best Sneaker</h4>
                            </li>
                            <li>
                                <img src={supportIcon} alt="" />
                                <h4>24/7 Support</h4>
                            </li>
                        </ul>
                    </div>
                    <div className="hero-right">
                        <div className="owl-carousel owl-theme hero-carousel">
                            <div className="hero-carousel-item">
                                <img
                                    className="img-fluid"
                                    src={banner}
                                    alt=""
                                   
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
