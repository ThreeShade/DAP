import React from 'react'
import "./style.css"
import "./Header.css"
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
                <div class="offcanvas__search__option">
                    <span class="icon_search search-switch"></span>
                </div>
                <div class="offcanvas__logo">
                    <a href=" sdf#"><h4 style={{ fontFamily: "acquireB", color: "#ffa62b", display: "flex" }}>DELUX <span style={{ color: "white", display: "flex" }}>Abroad Courier</span></h4></a>
                </div>
                <div id="mobile-menu-wrap">
                    <div class="slicknav_menu">
                        <a href="##"
                            aria-haspopup="true" role="button" tabindex="0" class="slicknav_btn slicknav_collapsed"><span
                                class="slicknav_menutxt">MENU</span><span class="slicknav_icon"><span
                                    class="slicknav_icon-bar"></span><span class="slicknav_icon-bar"></span><span
                                        class="slicknav_icon-bar"></span></span></a>
                        <nav class="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu" style={{ display: 'none' }}>
                            <ul>
                                <li>MENU</li>
                                <li class="active"><a href=" dgs#"
                                    role="menuitem">Home</a></li>
                                <li><a href="#"
                                    role="menuitem">Services</a></li>
                                <li><a href="#"
                                    role="menuitem">About</a></li>
                                {/* <li class="slicknav_collapsed slicknav_parent"><a
                                    href="##" role="menuitem"
                                    aria-haspopup="true" tabindex="-1" class="slicknav_item slicknav_row"><a
                                        href="##">Pages</a>
                                    <span class="slicknav_arrow">►</span></a>
                                    <ul class="dropdown slicknav_hidden" role="menu" aria-hidden="true" style={{ display: "none" }}>
                                        <li><a href="https://preview.colorlib.com/theme/freightbroker/about.html"
                                            role="menuitem" tabindex="-1">About</a></li>
                                        <li><a href="https://preview.colorlib.com/theme/freightbroker/services-details.html"
                                            role="menuitem" tabindex="-1">Services Details</a></li>
                                        <li><a href="https://preview.colorlib.com/theme/freightbroker/blog-details.html"
                                            role="menuitem" tabindex="-1">Blog Details</a></li>
                                    </ul>
                                </li> */}
                                <li><a href="#"
                                    role="menuitem">Blog</a></li>
                                <li><a href="#"
                                    role="menuitem">Contacts</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <ul class="offcanvas__widget">
                    <li><span class="icon_phone"></span>044-4850 0102</li>
                    <li><span class="icon_pin"></span> 7, Ramakrishna Mutt Rd, Venkatesa Agraharam, Mylapore, Chennai, Tamil Nadu 600004</li>
                </ul>
                <div class="offcanvas__social">
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


            <header class="header">
                <div class="header__top">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-9 offset-lg-3">
                                <ul class="header__top__widget">
                                    <li><span class="icon_phone"></span> 044-4850 0102</li>
                                    <li><span class="icon_pin"></span>7, Ramakrishna Mutt Rd, Venkatesa Agraharam, Mylapore, Chennai-600004</li>
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
                                        <li><a
                                            href="#">Services</a>
                                        </li>
                                        <li><a href="#">About</a></li>
                                        <li><a href="##">Pages</a>
                                            <ul class="dropdown">
                                                <li><a
                                                    href="#">About</a>
                                                </li>
                                                <li><a
                                                    href="#">Services
                                                Details</a></li>
                                                <li><a
                                                    href="#">Blog
                                                Details</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Contacts</a>
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
                    <div class="canvas__open" onClick={changeClass}><i class="fa fa-bars"></i></div>
                </div>
            </header>
        </>
    )
}

export default Header
