import React from 'react'

function ContactUs() {
    return (
        <>
            <div className="cont-sec">
                <div class="container contact-form" id='contact'>
                    {/* <div class="contact-image">
                        <img src="./images/rc.png" alt="rocket_contact" />
                    </div> */}
                    <form method="">
                        <div class="row">
                            <div class="col-md-6">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0019394870856!2d80.26568831432489!3d13.03554821700007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267d325027095%3A0x44c86e02f85ab007!2sDeluxe%20Abroad%20Packers!5e0!3m2!1sen!2sin!4v1617562557160!5m2!1sen!2sin" style={{ border: "0", width: "100%", height: "100%" }} allowfullscreen="" loading="lazy" />
                            </div>
                            <div class="col-md-6 was">
                                <h3>Contact Us </h3>
                                <div className='cont-bord'></div>
                                <div class="form-group">
                                    <input type="text" name="txtName" class="form-control" placeholder="Name " />
                                </div>
                                <div class="form-group">
                                    <input type="text" name="txtEmail" class="form-control" placeholder="Email " />
                                </div>
                                <div class="form-group">
                                    <input type="text" name="txtPhone" class="form-control" placeholder="Phone Number " />
                                </div>
                                <div class="form-group">
                                    <textarea name="txtMsg" class="form-control" placeholder="Message *" style={{ width: "100%", height: "60px" }}></textarea>
                                </div>
                                <div class="form-group">
                                    <input type="submit" name="btnSubmit" class="btnSubmit" value="Send Message" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactUs
