import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';


const SectionTitle = ({subtitle, title, description, textAlign, radiusRounded}) => {
    return (
        <div className={`section-title ${textAlign}`}>
            <AnimationOnScroll 
            animateIn="fadeInUp"
            animateOut="fadeInOut"
            animateOnce={true}>
                <h4  style={{color:"black",backgroundColor:"#f5f8fa"}} className={`subtitle ${radiusRounded}`}><span className="theme-gradient" dangerouslySetInnerHTML={{__html: subtitle}}></span></h4>
            </AnimationOnScroll>
            
            <AnimationOnScroll 
            animateIn="fadeInUp"
            animateOut="fadeInOut"
            animateOnce={true}>
                <h2  style={{color:"black"}} className="title w-600 mb--20" dangerouslySetInnerHTML={{__html: title}}></h2>
            </AnimationOnScroll>

            <AnimationOnScroll 
            animateIn="fadeInUp"
            animateOut="fadeInOut"
            animateOnce={true}>
                <p  style={{color:"black"}} className="description b1" dangerouslySetInnerHTML={{__html: description}}></p>
            </AnimationOnScroll>
        </div>
    )
}
export default SectionTitle;