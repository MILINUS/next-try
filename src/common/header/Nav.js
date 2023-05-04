import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <ul className="mainmenu">
            <li className="with-megamenu"><Link to="/">Home</Link> </li>
        </ul>
    )
}
export default Nav;
