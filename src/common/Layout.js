import React from 'react';
import HeaderOne from "./header/HeaderOne";
// import HeaderTopNews from "./header/HeaderTopNews";
import FooterFour from './footer/FooterFour';

const Layout = ({children}) => {
    return (
        <>
            <main className="page-wrapper">
                {/*  */}
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-not-transparent" />
                {children}
                <FooterFour />
                {/* <Copyright /> */}
            </main>
        </>
    )
}
export default Layout;
