import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const callToActionData = {
    title: "Ready to start creating a standard website?",
    subtitle: "Finest choice for your home & office",
    btnText: "Purchase CARS RENTAL PARIS",
}

const CalltoActionOne = () => {
    return (
        <div className="rn-callto-action clltoaction-style-default bg_image bg_image_fixed"  style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/bg-image-1.jpg)`}} data-black-overlay="7">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="inner">
                            <div className="content text-center">
                                <AnimationOnScroll 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                    <h2 className="title">{callToActionData.title}</h2>
                                </AnimationOnScroll>

                                <AnimationOnScroll 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                    <h6 className="subtitle">{callToActionData.subtitle}</h6>
                                </AnimationOnScroll>

                                <AnimationOnScroll 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                    <div className="call-to-btn">
                                        <a className="btn-default" href="#">{callToActionData.btnText}</a>
                                    </div>
                                </AnimationOnScroll>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CalltoActionOne;