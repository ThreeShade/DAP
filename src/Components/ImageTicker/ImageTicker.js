import React from 'react'
import '../../Pages/Pages.css'
function ImageTicker() {
    return (
        <>
            <div className="export-section container">
                <div className='export-content'>
                    <div className='home-title'><h3>We Provide <span style={{ color: "#ffa62b" }}>Courier Services</span> To Below Countries</h3></div>
                    <span className='bb' />
                    <div className=' text-center p-2'>
                        Deluxe Abroad Packers Provides Fast Service Free Pick-Up. Packing at Door Step
                        Services: International Courier, Domestic Services.Fast Service Free Pick-Up. Packing at Door Step
                        Services: International Courier, Domestic Services
                    </div>
                    <div className='country-block'>
                        <marquee behavior="scroll" direction="left" vspace="25px" height="150px" scrollamount="12">
                            <div style={{ display: "flex" }}>
                                <div className='country-grp'><img src='./images/Flags/usa.svg' alt='usa' className='c-flag' />USA</div>
                                <div className='country-grp'><img src='./images/Flags/uk.svg' alt='uk' className='c-flag' />UK</div>
                                <div className='country-grp'><img src='./images/Flags/canada.svg' alt='canada' className='c-flag' />CANADA</div>
                                <div className='country-grp'><img src='./images/Flags/australia.svg' alt='australia' className='c-flag' />australia</div>
                                <div className='country-grp'><img src='./images/Flags/new.png' alt='new zealand' className='c-flag' />new zealand</div>
                                <div className='country-grp'><img src='./images/Flags/germany.png' alt='germany' className='c-flag' />germany</div>
                                <div className='country-grp'><img src='./images/Flags/belgium.png' alt='belgium' className='c-flag' />belgium</div>
                                <div className='country-grp'><img src='./images/Flags/swit.png' alt='switzerland' className='c-flag' />switzerland</div>
                                <div className='country-grp'><img src='./images/Flags/france.png' alt='france' className='c-flag' />france</div>
                                <div className='country-grp'><img src='./images/Flags/neth.png' alt='netherland' className='c-flag' />netherland</div>
                                <div className='country-grp'><img src='./images/Flags/ireland.svg' alt='ireland' className='c-flag' />ireland</div>
                                <div className='country-grp'><img src='./images/Flags/sweden.svg' alt='sweden' className='c-flag' />sweden</div>
                                <div className='country-grp'><img src='./images/Flags/malaysia.svg' alt='malaysia' className='c-flag' />malaysia</div>
                                <div className='country-grp'><img src='./images/Flags/singapore.svg' alt='singapore' className='c-flag' />singapore</div>
                                <div className='country-grp'><img src='./images/Flags/sri-lanka.svg' alt='sri-lanka' className='c-flag' />sri-lanka </div>
                            </div>
                        </marquee>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ImageTicker
