import React from 'react';
import SEO from "../../common/SEO";
import SectionTitle from "../sectionTitle/SectionTitle";
import ContactOne from "./ContactOne";
import HeaderMain from '../../common/header/HeaderMain';
import FooterFour from '../../common/footer/FooterFour';
const Contact = () => {
    return (
        <>
            <SEO title="Contact ||  SPORT CARS & LUXURY - React Business  Template" />
            <HeaderMain/>
                <div style={{backgroundColor:'white'}} className="main-content">
                    {/* Start Contact Area  */}
                    <div className="rwt-contact-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 mb--40">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Contact Form"
                                        title = "Our Contact Address Here."
                                        description = ""
                                    />
                                </div>
                            </div>
                            <ContactOne />
                        </div>
                    </div>
                    {/* End Contact Area  */}
                </div>
            <FooterFour/>
        </>
    )
}
export default Contact;