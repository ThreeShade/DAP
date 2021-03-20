import React from 'react'
import "../Header/style.css"
import './HeroSection.css'
function HeroSection() {
    return (
        <>
            <section className="hero spad set-bg truck" data-setbg="img/hero.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="hero__text">
                                <span className="hero__label">delux abroad Courier</span>
                                <h2>Awesome Courier &amp; delivery services</h2>
                                <a href="http"
                                    className="primary-btn"><span>View services</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-area section-padding gray-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5 col-md-10">
                            <div className="about-caption">

                                <div className="section-tittle section-tittle3">
                                    <h2>We have a wide range of solutions for your business</h2>
                                </div>
                                <div className="support-caption">
                                    <p className="pera-top">Praesent eu rhoncus nibh. Quisque tincidunt, nisi in enetis pharetra dolor, nec
                  lacinia.</p>
                                    <a href="https" className="btn about-btn">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="offset-xl-1 col-xl-5 col-lg-6 col-md-10">
                            <div className="about-blog">
                                <div className="single-offers d-flex  mb-20">
                                    <div className="icon">
                                        <img src="./images/notification1.svg" alt="this icon" className="icon-border" />
                                    </div>
                                    <div className="offers-cap">
                                        <h3><a href="http">Tracking Is Easy</a></h3>
                                        <p>Praesent eu rhoncus nibh. Quisque tincidunt, nisi in enetis pharetra dolor, nec lacinia.</p>
                                    </div>
                                </div>
                                <div className="single-offers d-flex  mb-20">
                                    <div className="icon">
                                        <img src="./images/notification1.svg" alt="this icon" className="icon-border" />
                                    </div>
                                    <div className="offers-cap">
                                        <h3><a href="https">Multiple Branches</a></h3>
                                        <p>Praesent eu rhoncus nibh. Quisque tincidunt, nisi in enetis pharetra dolor, nec lacinia.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="about-shape">
                    <img src="./images/truck.webp" alt="" />
                </div> */}
            </section>
        </>
    )
}

export default HeroSection
