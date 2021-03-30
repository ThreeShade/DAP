import React from 'react'
import '../Pages.css'
function LandingPage() {
    return (
        <>
            <div className='hero-banner-section '>
                <div className='hero-content'>
                    <div className='hero-title'>Welcome to Delux Abroad Courier</div>
                    <div className="hero-text">International And Domestic Courier Service</div>
                    <div className='hero-btn-control'>
                        <a href="https://api.whatsapp.com/send/?phone=919841780434&text&app_absent=0" target='_blank' rel="noreferrer"><div className='button service-btn'>Book Now</div></a>
                        <div className='button'>Services</div>
                    </div>
                </div>
            </div>
            <div className="export-section">
                <div className='export-content'>
                    <div className='home-title'>We Provide Courier Services To Below Countries</div>
                    <span className='bb' />
                    <div className='country-block'>
                        <div className='country-grp'><img src='./images/Flags/usa.svg' alt='usa' />USA</div>
                        <div className='country-grp'><img src='./images/Flags/uk.svg' alt='uk' />UK</div>
                        <div className='country-grp'><img src='./images/Flags/canada.svg' alt='canada' />CANADA</div>
                        <div className='country-grp'><img src='./images/Flags/australia.svg' alt='australia' />australia</div>
                        <div className='country-grp'><img src='./images/Flags/new.png' alt='new' />new</div>
                        <div className='country-grp'><img src='./images/Flags/germany.png' alt='germany' />germany</div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default LandingPage
