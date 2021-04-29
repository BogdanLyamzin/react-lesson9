import React from "react";

import NavbarMenuItem from "../NavbarMenuItem";

import "./Navbar.css";

import {menuItems} from "./menuItems";

const Navbar = () => {

    const navbarMenuElements = menuItems.map(item => <NavbarMenuItem {...item} />);

    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-row">
                    <ul className="navbar-menu">
                        {navbarMenuElements}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

