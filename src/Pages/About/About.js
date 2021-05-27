import React from 'react'
import './About.css'
import AOS from 'aos'
function About() {
    AOS.init();
    return (
        <>
            <div>
                <div className="about-row" id='about'>
                    <div className='col-lg-6 d-flex align-items-center align-content-center'>
                        <div className='abt-col1' data-aos="fade-up" data-aos-duration="1500">
                            <div className='about-title' >ABOUT US</div>
                            <div className='about-text col-12 text-justify'>
                                With the world becoming more fast-paced than ever and globalization reaching its highest peak,
                                courier services have benefitted the most. Marketing courier services require it to be available in
                                all parts of the city so that businesses can approach it quickly to get the work done when they want to.
                                Another most important thing is reliability.
                            </div>
                            <div style={{ display: "flex" }}>
                                <i className="fas fa-shipping-fast abt-icon"></i>
                                <div>
                                    <div className='about-sub'>FAST DELIVERY</div>
                                    <div className='about-text'>Just the speed your delivery needs.</div>
                                </div>
                            </div>
                            <div style={{ display: "flex" }}>
                                <i className="fas fa-user-shield abt-icon"></i>
                                <div>
                                    <div className='about-sub'>SECURED SERVICE</div>
                                    <div className='about-text'>Trust is the best way to keep trust. We owe it.</div>
                                </div>
                            </div>
                            <div style={{ display: "flex" }}>
                                <i className="fas fa-route abt-icon"></i>
                                <div>
                                    <div className='about-sub'>WORLD WIDE SHIPPING</div>
                                    <div className='about-text'>Connecting the world and closing the spaces.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6' data-aos="zoom-in" data-aos-duration="1500"><div className='about1 p-5'><img src='./images/shift.gif' alt='about-img' /></div></div>
                </div>
            </div>
        </>
    )
}

export default About
