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
            <div className='offcanvas-menu-overlay' onClick={resetClass}></div>
            <div className='offcanvas-menu-wrapper' id='aw2' onClick={resetClass}>
                {/* <div class="offcanvas__search__option">
                    <span class="icon_search search-switch"></span>
                </div> */}
                <div className='offcanvas__logo'>
                    <Link to='/'>
                        <h4
                            style={{
                                fontFamily: 'acquireB',
                                color: '#ffa62b',
                                display: 'flex',
                            }}
                        >
                            DELUX&nbsp;
                            <span style={{ color: 'white', display: 'flex' }}>
                                Abroad Courier
              </span>
                        </h4>
                    </Link>
                </div>
                <div id='mobile-menu-wrap'>
                    <div className='slicknav_menu'>
                        <Link
                            to='/'
                            aria-haspopup='true'
                            role='button'
                            tabIndex='0'
                            className='slicknav_btn slicknav_collapsed'
                        >
                            <span className='slicknav_menutxt'>MENU</span>
                            <span className='slicknav_icon'>
                                <span className='slicknav_icon-bar'></span>
                                <span className='slicknav_icon-bar'></span>
                                <span className='slicknav_icon-bar'></span>
                            </span>
                        </Link>
                        <nav
                            className='slicknav_nav slicknav_hidden'
                            aria-hidden='true'
                            role='menu'
                            style={{ display: 'none' }}
                        >
                            <ul style={{ listStyle: 'none' }}>
                                <li style={{ color: '#FFA62B' }}>MENU</li>
                                <li className='active py-1'>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li className='py-1'>
                                    <Link to='/services'>Services</Link>
                                </li>
                                <li className='py-1'>
                                    <Link to='/#about'>About</Link>
                                </li>
                                <li className='py-1'>
                                    <Link to='/Branches'>Branches</Link>
                                </li>
                                <li className='py-1'>
                                    <Link to='/#contact'>Contacts Us</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <ul className='offcanvas__widget'>
                    <li>
                        <i className='fas fa-phone mr-1'></i> 044-4850 0102
                     </li>
                    <li>
                        <span className='icon_pin'></span> 7, Ramakrishna Mutt Rd, Venkatesa
                            Agraharam, Mylapore, Chennai, Tamil Nadu 600004
                    </li>
                </ul>
                <div className='offcanvas__social'>
                    <Link to='/'>
                        <i className='fab fa-facebook-f ' />
                    </Link>
                    <Link to='/'>
                        <i className='fab fa-instagram'></i>
                    </Link>
                    <Link to='/'>
                        <i className='fab fa-whatsapp'></i>
                    </Link>
                    <Link to='/'>
                        <i className='fab fa-linkedin-in'></i>
                    </Link>
                </div>
            </div>

            <header className='header'>
                <div className='header__top'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-9 offset-lg-3'>
                                <ul className='header__top__widget'>
                                    &nbsp;&nbsp;&nbsp;
                  <li>
                                        <i className='fas fa-phone' /> &nbsp; 044-4850 0102
                  </li>{' '}
                  &nbsp; &nbsp;
                  <li>
                                        <i className='fas fa-map-marker-alt'></i> &nbsp; 7, Ramakrishna
                    Mutt Rd, Venkatesa Agraharam, Mylapore, Chennai-600004
                  </li>
                                </ul>
                                <div className='header__top__right'>
                                    <div className='header__top__right__social'>
                                        <Link to='/'>
                                            <span className='social_facebook'></span>
                                        </Link>
                                        <Link to='/'>
                                            <span className='social_twitter'></span>
                                        </Link>
                                        <Link to='/'>
                                            <span className='social_linkedin'></span>
                                        </Link>
                                        <Link to='/'>
                                            <span className='social_pinterest'></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='header__options'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-3'>
                                <div className='header__logo'>
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
                            <div className='col-lg-9'>
                                <nav className='header__menu mobile-menu'>
                                    <ul>
                                        <li className='active'>
                                            <Link to='/'>Home</Link>
                                        </li>
                                        <li>
                                            <Link to='/#about' >About</Link>
                                        </li>
                                        <li>
                                            <Link to='/services'>Services</Link>
                                        </li>
                                        <li>
                                            <Link to='/branches'>Branches</Link>
                                        </li>
                                        <li>
                                            <Link to='/#contact'>Contact Us</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            {/* <div className="col-lg-2">
                                <div className="search__option">
                                    <span className="icon_search search-switch"></span>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className='canvas__open' onClick={changeClass}>
                        <i className='fas fa-bars'></i>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
