import React, {useState} from 'react';
import {FiChevronUp} from "react-icons/fi";
import Blury from '../Blury';


const ScrollTop = () => {
    const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };
    const goToWhatsapp=()=>{
        const url ="https://wa.me/33776113621";
        window.location.replace(url);
    }
    return (
        <>
            <div 
            className="rn-back-top" 
            onClick={goToWhatsapp}
            style={{display: 'inline'}}
            ><FiChevronUp /></div>
            <Blury />
        </>
    )
}

export default ScrollTop;