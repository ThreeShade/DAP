import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
function Header() {
    function changeClass() {
        document.querySelector('.offcanvas-menu-overlay').className = 'offcanvas-menu-overlay active';
        document.getElementById('aw2').className = 'offcanvas-menu-wrapper active';
    }
    const resetClass = () => {
        document.getElementById('aw2').className = 'offcanvas-menu-wrapper';
        document.querySelector('.offcanvas-menu-overlay').className = 'offcanvas-menu-overlay';
    }
    return (
        <>
            <div class="offcanvas-menu-overlay" onClick={resetClass}></div>
            <div class="offcanvas-menu-wrapper" id="aw2" onClick={resetClass}>
                {/* <div class="offcanvas__search__option">
                    <span class="icon_search search-switch"></span>
                </div> */}
                <div class="offcanvas__logo">
                    <a href="sdf#"><h4 style={{ fontFamily: "acquireB", color: "#ffa62b", display: "flex" }}>DELUX <span style={{ color: "white", display: "flex" }}>Abroad Courier</span></h4></a>
                </div>
                <div id="mobile-menu-wrap">
                    <div class="slicknav_menu">
                        <Link to="/"
                            aria-haspopup="true" role="button" tabindex="0" class="slicknav_btn slicknav_collapsed"><span
                                class="slicknav_menutxt">MENU</span><span class="slicknav_icon"><span
                                    class="slicknav_icon-bar"></span><span class="slicknav_icon-bar"></span><span
                                        class="slicknav_icon-bar"></span></span></Link>
                        <nav class="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu" style={{ display: 'none' }}>
                            <ul style={{ listStyle: "none" }}>
                                <li style={{ color: "#FFA62B" }}>MENU</li>
                                <li class="active"><a href=" dgs#"
                                >Home</a></li>
                                <li><a href="#s"
                                >Services</a></li>
                                <li><a href="#s"
                                >About</a></li>
                                <li><a href="#a"
                                >Branches</a></li>
                                <li><a href="#a"
                                >Contacts Us</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <ul class="offcanvas__widget">
                    <li><i class="fas fa-phone"></i>044-4850 0102</li>
                    <li><span class="icon_pin"></span> 7, Ramakrishna Mutt Rd, Venkatesa Agraharam, Mylapore, Chennai, Tamil Nadu 600004</li>
                </ul>
                <div class="offcanvas__social">
                    <a href="##"><i class="fab fa-facebook-f" /></a>
                    <a href="##"><i class="fab fa-instagram"></i></a>
                    <a href="##"><i class="fab fa-whatsapp"></i></a>
                    <a href="##"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>

            <header class="header">
                <div class="header__top">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-9 offset-lg-3" >
                                <ul class="header__top__widget">&nbsp;&nbsp;&nbsp;
                                    <li><i class="fas fa-phone" />	&nbsp;  044-4850 0102</li>	&nbsp;	&nbsp;
                                    <li><i class="fas fa-map-marker-alt"></i> 	&nbsp; 7, Ramakrishna Mutt Rd, Venkatesa Agraharam, Mylapore, Chennai-600004</li>
                                </ul>
                                <div class="header__top__right">
                                    <div class="header__top__right__social">
                                        <a href="##"><span
                                            class="social_facebook"></span></a>
                                        <a href="##"><span
                                            class="social_twitter"></span></a>
                                        <a href="##"><span
                                            class="social_linkedin"></span></a>
                                        <a href="##"><span
                                            class="social_pinterest"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header__options">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="header__logo">
                                    <a href="fsf#" >
                                        {/* <img src="./Freight-Broker _ Template_files/logo.webp" alt="main" /> */}
                                        <h3 style={{ display: "flex", fontFamily: "acquireBold", fontSize: "40px" }}>
                                            DELUX
                                            <span style={{ fontSize: "14px", fontFamily: "acquireLight", display: "flex", flexDirection: "column", justifyContent: "center", marginLeft: "10px" }}>
                                                <span>ABROAD</span><span>PACKERS</span>
                                            </span></h3></a>
                                </div>
                            </div>
                            <div class="col-lg-9">
                                <nav class="header__menu mobile-menu">
                                    <ul>
                                        <li class="active"><a
                                            href=" asf#">Home</a></li>
                                        <li><a href="#z">About</a></li>
                                        <li><a
                                            href="#z">Services</a>
                                        </li>
                                        <li><a href="#a">Branches</a></li>
                                        <li><a href="#a">Contact Us</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            {/* <div class="col-lg-2">
                                <div class="search__option">
                                    <span class="icon_search search-switch"></span>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div class="canvas__open" onClick={changeClass}><i class="fas fa-bars"></i></div>
                </div>
            </header>
        </>
    )
}

export default Header
