import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { FiArrowRight } from "react-icons/fi";
import Logo from "../logo/Logo";

const callToActionData = {
    title: "Ready to start creating a standard website?",
    subtitle: "If you want to create a corporate template you can purshace now our CARS RENTAL PARIS template.",
    btnText: "Purchase CARS RENTAL PARIS",
}

const CalltoActionSeven = () => {
    return (
        <div className="rn-callto-action clltoaction-style-default style-7">
            <div className="container">
                <div className="row row--0 align-items-center content-wrapper">
                    <div className="col-lg-8 col-md-8">
                        <div className="inner">
                            <div className="content text-start">
                                <Logo 
                                    image={`${process.env.PUBLIC_URL}/images/logo/LOGO_SCL.jpg`}
                                    image2={`${process.env.PUBLIC_URL}/images/logo/LOGO_SCL.jpg`}
                                />
                                <AnimationOnScroll 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                    <p className="subtitle">{callToActionData.subtitle}</p>
                                </AnimationOnScroll>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <AnimationOnScroll 
                        animateIn="fadeInUp"
                        animateOut="fadeInOut"
                        animateOnce={true}>
                            <div className="call-to-btn text-start mt_sm--20 text-md-end">
                                <a className="btn-default btn-icon" target="_blank" href="https://themeforest.net/checkout/from_item/33571911?license=regular">{callToActionData.btnText} <i className="icon"><FiArrowRight /></i></a>
                            </div>
                        </AnimationOnScroll>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CalltoActionSeven;