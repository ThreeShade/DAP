import React from 'react'
import ImageTicker from '../../Components/ImageTicker/ImageTicker'
import '../Pages.css'
function LandingPage() {
    return (
        <>
            <a href='https://api.whatsapp.com/send/?phone=919841780434&text&app_absent=0' rel="noreferrer" target="_blank"><img src='./images/Flags/wp.gif' className='whatsapp-gif' alt="whatsapp-gif" /></a>
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
            <div className='features-section'>
                deliver within 2 to 3 working days*
            </div>
            <ImageTicker />
        </>
    )
}

export default LandingPage
