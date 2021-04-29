import React from 'react'
import {NavLink} from "react-router-dom";

import "./NavbarMenuItem.css";

const NavbarMenuItem = ({to, text}) => {
    return (
        <li className="navbar-menu-item">
            <NavLink exact to={to} className="navbar-menu-link" activeClassName="active">{text}</NavLink>
        </li>
    )
}

export default NavbarMenuItem;