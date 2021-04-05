import React from 'react'
import ContactUs from '../../Components/ContactUs/ContactUs'
import ImageTicker from '../../Components/ImageTicker/ImageTicker'
import About from '../About/About'
import '../Pages.css'
import Products from '../Products/Products'
function LandingPage() {
    return (
        <>
            <a href='https://api.whatsapp.com/send/?phone=919841780434&text&app_absent=0' rel="noreferrer" target="_blank"><img src='./images/Flags/wp.gif' className='whatsapp-gif' alt="whatsapp-gif" /></a>
            <div className='hero-banner-section '>
                <div className='hero-content'>
                    <div className='hero-title'>Welcome to Delux Abroad Couriers</div>
                    <div className="hero-text">International And Domestic Courier Service.<br />We are as fast as air and as trustworthy as your heart.</div>
                    <div className='hero-btn-control'>
                        <a href="https://api.whatsapp.com/send/?phone=919841780434&text&app_absent=0" target='_blank' rel="noreferrer">
                            <div className='button service-btn'>Book Now</div>
                        </a>
                        <div className='button ssf'>Services</div>
                    </div>
                </div>
            </div>
            <About />
            <Products />
            <ImageTicker />
            <div className='features-section' >
                deliver within 2 to 3 working days*
            </div>
            <div className='special-section' data-aos="fade-up" data-aos-duration="1500">
                <div className='special-title container text-center my-3'><h3>OUR SPECIAL FEATURES</h3></div>
                <div style={{ borderBottom: "1px solid #ffa62b", width: "15%" }} ></div>
                <div className='container text-center p-3'>
                    We are emerging as a top destination for
                    ‘same-day’ transportation and are continuously
                    serving our customers 24/7/365. We constantly expand
                    our resources to cater to our customer expectation addressing their unique market needs.
                </div>
                <div className='special-row'>
                    <div className='special-card'><i class="fas fa-dollar-sign sym"></i>Lowest Market Price </div>
                    <div className='special-card'><i class="fas fa-shipping-fast sym"></i>Excess Baggage Packing </div>
                    <div className='special-card'><i class="fas fa-box-open sym"></i>Customized Packing </div>
                    <div className='special-card'><i class="fas fa-laptop-code sym"></i>Online Tracking </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6 d-flex flex-column justify-content-center' data-aos="fade-up" data-aos-duration="1500">
                    <div className='special-title px-3'>
                        <h3>GET THE FASTEST <span style={{ color: "#ffa62b" }}>PRODUCT DELEVERY</span></h3>
                    </div>
                    <div className=' text-justify p-3'>
                        We are as fast as air and as trustworthy as your heart.
                        We are at your service, call us anyday, anytime.
                        Try us and see how good our services are.ry us and see how good our services are.
                    </div>
                </div>
                <div className='col-lg-6' data-aos="zoom-in" data-aos-duration="1500"><div className='fast-del'><img src='./images/about1.jpg' alt='home-img' /></div></div>
            </div>
            <ContactUs />
        </>
    )
}

export default LandingPage
