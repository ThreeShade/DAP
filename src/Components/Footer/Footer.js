import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import "./Footer.css"
function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="footer__about">
                                <div className="footer__logo">
                                    <h3 style={{ display: "flex", fontFamily: "acquireBold", fontSize: "40px", color: "#ffa62b" }}>
                                        DELUX
                                            <span style={{ fontSize: "14px", color: "white", fontFamily: "acquireLight", display: "flex", flexDirection: "column", justifyContent: "center", marginLeft: "10px" }}>
                                            <span>ABROAD</span><span>PACKERS</span>
                                        </span>
                                    </h3>
                                </div>
                                <p>
                                    There’s nothing more precious than time, so save it.We are at your service, call us anyday, anytime.It’s our chance to prove ourselves, we won’t let you down.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-2 offset-lg-1 col-md-6 col-sm-6">
                            <div className="footer__widget">
                                <h5>Quick links</h5>
                                <ul>
                                    <li><Link to="/services">Services</Link></li>
                                    <li><Link to="/branches">Branches</Link></li>
                                    <li><Link to="/#about">About us</Link></li>
                                    <li><Link to="/#contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="footer__widget">
                                <h5>Services</h5>
                                <ul>
                                    <li><Link to="/services">Air Shipping</Link></li>
                                    <li><Link to="/services">Expert Staff</Link></li>
                                    <li><Link to="/services">Ground Shipping</Link></li>
                                    <li><Link to="/services">Logistic Services</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer__widget">
                                <h5>Contacts</h5>
                                <ul className="address">
                                    <li><span>HEAD OFFICE</span> </li>
                                    <li><span className="icon_pin"></span> 7, Ramakrishna Mutt Rd, Venkatesa Agraharam, Mylapore, Chennai, Tamil Nadu 600004</li>
                                    <li><span className="icon_phone"></span>044-4850 0102</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="footer__copyright__text">
                                    <p>
                                        Copyright ©
                                        2021 All rights reserved | Delux Abroad Packers
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer
