import React, {Component} from 'react'
import K1 from './img/K1.png'
import K2 from './img/K2.png'
import K3 from './img/60355699_1029169193940679_881175530764763136_n.png'

class OurTeam extends Component {
    render() {
        return (
            <div className="OurTeam">
                <div className="container">
                    <div className="row heading meet-our-team">
                        <div className="col-md-6 col-md-offset-3">
                            <h2 className="text-center bottom-line">
                                Meet Our Team
                            </h2>
                            <p className="subheading text-center">
                                Creative Nerds
                            </p>
                        </div>
                    </div>

                    <div className="row team-row">
                        <div className="col-md-4 col-sm-6 team-wrap">
                            <div className="team-member text-center">
                                <div className="team-img">
                                    <img src={K1} alt="" />
                                    <div className="overlay">
                                        <div className="team-details text-center">
                                            <p>
                                                Machine learning is nothing but
                                                easy
                                            </p>
                                            <div className="socials mt-20">
                                                <a href="/">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                                <a href="/">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                                <a href="/">
                                                    <i className="fab fa-google" />
                                                </a>
                                                <a href="/">
                                                    <i className="fa fa-envelope" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h6 className="team-title">Khoa Anh Nguyen</h6>
                                <span>Developer</span>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 team-wrap">
                            <div className="team-member text-center">
                                <div className="team-img">
                                    <img src={K2} alt="" />
                                    <div className="overlay">
                                        <div className="team-details text-center">
                                            <p>Is there anything difficult ?</p>
                                            <div className="socials mt-20">
                                                <a href="/">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                                <a href="/">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                                <a href="/">
                                                    <i className="fab fa-google" />
                                                </a>
                                                <a href="/">
                                                    <i className="fa fa-envelope" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h6 className="team-title">Anh Khoa</h6>
                                <span>Designer</span>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 team-wrap">
                            <div className="team-member last text-center">
                                <div className="team-img">
                                    <img src={K3} alt="" />
                                    <div className="overlay">
                                        <div className="team-details text-center">
                                            <p>I believe I'm the future</p>
                                            <div className="socials mt-20">
                                                <a href="/">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                                <a href="/">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                                <a href="/">
                                                    <i className="fab fa-google" />
                                                </a>
                                                <a href="/">
                                                    <i className="fa fa-envelope" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h6 className="team-title">Khoa Nguyen</h6>
                                <span>Team Leader</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OurTeam
