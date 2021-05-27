import React from 'react'
import './Services.css'
import { Helmet } from 'react-helmet'
function Services() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Deluxe Abroad Packers-Services-Products Export To Abroad ToSweets|Books|Dress|Pickle|Spices</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Deluxe Abroad Packers Export Products Like Pickles,Dresses,Spices,Books,Frames,Sweets,Vessels,Medicine,Snacks" />
            </Helmet>
            <section className="services pt-50 pb-50" id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 mx-auto text-center">
                            <div className="section-title mb-100">
                                <h4>services</h4>
                                <p className='text-capitalize'>
                                    we provide best abroad package services in chennai.with our more years of experience ,we deliver the packages ontime.
                                    we export the packages more than 10 countries!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            {/* <!-- Single Service --> */}
                            <div className="single-service">
                                <img src="/images/Icons/international.png" alt="CARGO SERVICE" className='service-pg-icons' />
                                <h4>CARGO SERVICE </h4>
                                <p>We ship the packages to abroad through air lines with the famous freight service providers and excellent service</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            {/* <!-- Single Service --> */}
                            <div className="single-service">
                                <img src="/images/Icons/box2.png" alt="CARGO SERVICE" className='service-pg-icons' />
                                <h4>SAFE DELIVERY</h4>
                                <p>deluxe abroad packers follows the security protocols and ensures package safety security measures</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            {/* <!-- Single Service --> */}
                            <div className="single-service">
                                <img src="/images/Icons/service.png" alt="SERVICE PACKAGES" className='service-pg-icons' />
                                <h4>SERVICE PACKAGES</h4>
                                <p>Customized service packages to fit Also specific needs we deliver various types of packages like dress,books,pickles. </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            {/* <!-- Single Service --> */}
                            <div className="single-service">
                                <img src="/images/Icons/fast.png" alt="SERVICE PACKAGES" className='service-pg-icons' />
                                <h4>BUSINESS EXPRESS</h4>
                                <p> multi-module product that involves both air and surface network. The delivery happens in 24 to 96 hour transit time</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            {/* <!-- Single Service --> */}
                            <div className="single-service">
                                <img src="/images/Icons/box.png" alt="QUALITY SERVICE" className='service-pg-icons' />
                                <h4>QUALITY SERVICE</h4>
                                <p>Delight customers with quality service by setting new trends through innovation and technology</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            {/* <!-- Single Service --> */}
                            <div className="single-service">
                                <img src="/images/Icons/icon6.png" alt="Door Step Delivery" className='service-pg-icons' />
                                <h4>DOOR DELIVERIES</h4>
                                <p>we provide door step pickup and delivery of your order.customer satisfaction is our main goal!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Services
