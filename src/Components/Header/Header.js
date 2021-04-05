import React from 'react'
import './Header.css'
import { HashLink as Link } from 'react-router-hash-link'
function Header() {
    function changeClass() {
        document.querySelector('.offcanvas-menu-overlay').className =
            'offcanvas-menu-overlay active'
        document.getElementById('aw2').className = 'offcanvas-menu-wrapper active'
    }
    const resetClass = () => {
        document.getElementById('aw2').className = 'offcanvas-menu-wrapper'
        document.querySelector('.offcanvas-menu-overlay').className =
            'offcanvas-menu-overlay'
    }
    return (
        <>
            <div class='offcanvas-menu-overlay' onClick={resetClass}></div>
            <div class='offcanvas-menu-wrapper' id='aw2' onClick={resetClass}>
                {/* <div class="offcanvas__search__option">
                    <span class="icon_search search-switch"></span>
                </div> */}
                <div class='offcanvas__logo'>
                    <Link to='/'>
                        <h4
                            style={{
                                fontFamily: 'acquireB',
                                color: '#ffa62b',
                                display: 'flex',
                            }}
                        >
                            DELUX{' '}
                            <span style={{ color: 'white', display: 'flex' }}>
                                Abroad Courier
              </span>
                        </h4>
                    </Link>
                </div>
                <div id='mobile-menu-wrap'>
                    <div class='slicknav_menu'>
                        <Link
                            to='/'
                            aria-haspopup='true'
                            role='button'
                            tabindex='0'
                            class='slicknav_btn slicknav_collapsed'
                        >
                            <span class='slicknav_menutxt'>MENU</span>
                            <span class='slicknav_icon'>
                                <span class='slicknav_icon-bar'></span>
                                <span class='slicknav_icon-bar'></span>
                                <span class='slicknav_icon-bar'></span>
                            </span>
                        </Link>
                        <nav
                            class='slicknav_nav slicknav_hidden'
                            aria-hidden='true'
                            role='menu'
                            style={{ display: 'none' }}
                        >
                            <ul style={{ listStyle: 'none' }}>
                                <li style={{ color: '#FFA62B', marginBottom: '10px' }}>MENU</li>
                                <li class='active'>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>
                                    <Link to='/#services'>Services</Link>
                                </li>
                                <li>
                                    <Link to='/#about'>About</Link>
                                </li>
                                <li>
                                    <Link to='/Branches'>Branches</Link>
                                </li>
                                <li>
                                    <Link to='/#contact'>Contacts Us</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <ul class='offcanvas__widget'>
                    <li>
                        <i class='fas fa-phone'></i> 044-4850 0102
          </li>
                    <li>
                        <span class='icon_pin'></span> 7, Ramakrishna Mutt Rd, Venkatesa
            Agraharam, Mylapore, Chennai, Tamil Nadu 600004
          </li>
                </ul>
                <div class='offcanvas__social'>
                    <Link to='/'>
                        <i class='fab fa-facebook-f' />
                    </Link>
                    <Link to='/'>
                        <i class='fab fa-instagram'></i>
                    </Link>
                    <Link to='/'>
                        <i class='fab fa-whatsapp'></i>
                    </Link>
                    <Link to='/'>
                        <i class='fab fa-linkedin-in'></i>
                    </Link>
                </div>
            </div>

            <header class='header'>
                <div class='header__top'>
                    <div class='container'>
                        <div class='row'>
                            <div class='col-lg-9 offset-lg-3'>
                                <ul class='header__top__widget'>
                                    &nbsp;&nbsp;&nbsp;
                  <li>
                                        <i class='fas fa-phone' /> &nbsp; 044-4850 0102
                  </li>{' '}
                  &nbsp; &nbsp;
                  <li>
                                        <i class='fas fa-map-marker-alt'></i> &nbsp; 7, Ramakrishna
                    Mutt Rd, Venkatesa Agraharam, Mylapore, Chennai-600004
                  </li>
                                </ul>
                                <div class='header__top__right'>
                                    <div class='header__top__right__social'>
                                        <Link to='/'>
                                            <span class='social_facebook'></span>
                                        </Link>
                                        <Link to='/'>
                                            <span class='social_twitter'></span>
                                        </Link>
                                        <Link to='/'>
                                            <span class='social_linkedin'></span>
                                        </Link>
                                        <Link to='/'>
                                            <span class='social_pinterest'></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='header__options'>
                    <div class='container'>
                        <div class='row'>
                            <div class='col-lg-3'>
                                <div class='header__logo'>
                                    <Link to='/'>
                                        {/* <img src="./Freight-Broker _ Template_files/logo.webp" alt="main" /> */}
                                        <h3
                                            style={{
                                                display: 'flex',
                                                fontFamily: 'acquireBold',
                                                fontSize: '40px',
                                            }}
                                        >
                                            DELUX
                                            <span
                                                style={{
                                                    fontSize: '14px',
                                                    fontFamily: 'acquireLight',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'center',
                                                    marginLeft: '10px',
                                                }}
                                            >
                                                <span>ABROAD</span>
                                                <span>PACKERS</span>
                                            </span>
                                        </h3>
                                    </Link>
                                </div>
                            </div>
                            <div class='col-lg-9'>
                                <nav class='header__menu mobile-menu'>
                                    <ul>
                                        <li class='active'>
                                            <Link to='/'>Home</Link>
                                        </li>
                                        <li>
                                            <Link to='/#about' >About</Link>
                                        </li>
                                        <li>
                                            <Link to='/#services'>Services</Link>
                                        </li>
                                        <li>
                                            <Link to='/Branches'>Branches</Link>
                                        </li>
                                        <li>
                                            <Link to='/#contact'>Contact Us</Link>
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
                    <div class='canvas__open' onClick={changeClass}>
                        <i class='fas fa-bars'></i>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
