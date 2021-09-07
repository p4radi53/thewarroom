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

    return (
        <header>
            <div className="container">
                <nav>
                    <Link to="/">
                        <img src="/logo_WR.jpg" alt="Logo WARroom" className="nav-logo" />
                    </Link>
                    {
                        isMobile ?
                        <div className="nav-toggler" onClick={() => toggleIsOn(!isOn)}>
                            <i className={isOn ? "fas fa-times" : "fas fa-bars"}></i>
                        </div> :
                        <div></div>
                    }
                    <div className={`nav-collapse ${isOn ? 'active' : ''}`}>
                        <ul className="nav-list">
                            {
                            MenuItems.map((item, index) => {
                                return (
                                    <li key={index} onClick={() => toggleIsOn(false)}><Link className="nav-link" to={item.url}>{item.title}</Link></li>
                                )
                            })
                            }
                            <li><a href="https://www.facebook.com/thewarroomconference" className="nav-link"><i className="fab fa-facebook-square"></i></a></li>
                            <li><a href="#" className="nav-link"><i className="fab fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;