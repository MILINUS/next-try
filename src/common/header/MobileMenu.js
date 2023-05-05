import React from 'react';
import Logo from "../../elements/logo/Logo";
import Nav from './Nav';
import { FiX } from "react-icons/fi";

const MobileMenu = ({show, onClose}) => {
    return (
        <div style={{backgroud:"#fff"}} className={`popup-mobile-menu ${show ? "active": ""}`}>
            <div style={{backgroud:"#fff"}} className="inner">
                <div style={{backgroud:"#fff"}}  className="header-top">
                    <Logo 
                        image={`${process.env.PUBLIC_URL}/images/logo/LOGO_SCL.jpg`}
                        image2={`${process.env.PUBLIC_URL}/images/logo/LOGO_SCL.jpg`}
                    />
                    <div style={{backgroud:"#fff"}} className="close-menu">
                        <span className="close-button" onClick={onClose}><FiX /></span>
                    </div>
                </div>
                <Nav />
            </div>
        </div>
    )
}
export default MobileMenu;