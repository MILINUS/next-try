import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <ul className="mainmenu">
            <li  className="with-megamenu"><Link style={{color:"black"}} to="/">Home</Link> </li>
        </ul>
    )
}
export default Nav;
