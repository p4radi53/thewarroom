import "../styles/Navbar.scss";
import { Link } from "react-router-dom";

import React, { useState } from 'react';
import { useMediaQuery } from "react-responsive";

const MenuItems =  [
    {
        title: "Home",
        url: "/"
    },
    {
        title: "Partners",
        url: "/partners"
    },
    {
        title: "Event",
        url: "/event"
    },
    {
        title: "Register",
        url: "/register"
    },
    {
        title: "FAQ",
        url: "/FAQ",
    },
    {
        title: "About Us",
        url: "/about"
    }

]

function Navbar() {
    const [isOn, toggleIsOn] = useState(false);
    const isMobile = useMediaQuery({ query: '(max-width: 960px)'});

    let menu;
    if((isMobile && isOn) || !isMobile ) {
        menu = 
        <div className="wrap">
            <img src="/logo_WR.jpg" alt="" className="navbar-logo"/>
            <ul className={`navbar-menu ${isOn ? "navbar-menu-active" : "navbar-menu-disabled"}`}>
                {
                MenuItems.map((item, index) => {
                    return (
                        <li key={index} onClick={() => toggleIsOn(false)}><Link className="navbar-link" to={item.url}>{item.title}</Link></li>
                        
                        
                    )
                })
                }
                <div className="navbar-icons">
                    <a href="#" className="navbar-link"><i className="fa fa-facebook"></i></a>
                    <a href="#" className="navbar-link"><i className="fa fa-linkedin"></i></a>
                </div>
            </ul>
        </div>
    } else {
        menu = null
    }
    return (
        <>
        <nav className="navbar">
            <div className="container">
            {
                isMobile ?
                <div className="navbar-menu-icon" onClick={() => 
                    toggleIsOn(!isOn)}>
                    <i className={isOn ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                :
                null
            }
            {menu}
            
            
            </div>
        </nav>
        </>
    )
}

export default Navbar;