import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
function Footer() {
    return (
        <>
            <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="footer__about">
                                <div class="footer__logo">
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
                        <div class="col-lg-2 offset-lg-1 col-md-6 col-sm-6">
                            <div class="footer__widget">
                                <h5>Quick links</h5>
                                <ul>
                                    <li><Link to="#a">Services</Link></li>
                                    <li><Link to="#a">Branches</Link></li>
                                    <li><Link to="#a">About us</Link></li>
                                    <li><Link to="#a">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6 col-sm-6">
                            <div class="footer__widget">
                                <h5>Services</h5>
                                <ul>
                                    <li><Link to="#a">Air Shipping</Link></li>
                                    <li><Link to="#a">Expert Staff</Link></li>
                                    <li><Link to="#a">Ground Shipping</Link></li>
                                    <li><Link to="#a">Logistic Services</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="footer__widget">
                                <h5>Contacts</h5>
                                <ul class="address">
                                    <li><span>HEAD OFFICE</span> </li>
                                    <li><span class="icon_pin"></span> 7, Ramakrishna Mutt Rd, Venkatesa Agraharam, Mylapore, Chennai, Tamil Nadu 600004</li>
                                    <li><span class="icon_phone"></span>044-4850 0102</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer__copyright">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12">
                                <div class="footer__copyright__text">
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
