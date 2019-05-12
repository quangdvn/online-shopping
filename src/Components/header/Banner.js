import React, {Component} from 'react'
import fasServiceIcon from './img/fas-service-icon.png'
import freshFoodIcon from './img/fresh-food-icon.png'
import supportIcon from './img/support-icon.png'
import banner from './img/banner.jpg'
import {Link} from 'react-router-dom'

export default class Banner extends Component {
    render() {
        return (
            <div class="hero-banner">
                <div class="hero-wrapper">
                    <div class="hero-left">
                        <h1 class="hero-title">
                            Sneaker your <br /> best friend
                        </h1>
                        <div class="d-sm-flex flex-wrap">
                            <Link
                                class="button button-hero button-shadow"
                                to="/">
                                Buy Now
                            </Link>
                            <a
                                class="hero-banner__video"
                                href="https://www.youtube.com/watch?v=hqaUF2JNY_U">
                                Watch Video
                            </a>
                        </div>
                        <ul class="hero-info d-none d-lg-block">
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
                    <div class="hero-right">
                        <div class="owl-carousel owl-theme hero-carousel">
                            <div class="hero-carousel-item">
                                <img
                                    class="img-fluid"
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
