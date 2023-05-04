import React from 'react';
import HeaderOne from "./header/HeaderOne";
import FooterFour from './footer/FooterFour';

const Layout = ({children}) => {
    return (
        <>
            <main className="page-wrapper">
                {/*  */}
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-not-transparent" />
                {children}
                <FooterFour />
            </main>
        </>
    )
}
export default Layout;
