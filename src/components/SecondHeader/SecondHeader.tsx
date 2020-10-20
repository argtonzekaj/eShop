import React from 'react';
import { Link } from "react-router-dom";

import logo from './../../assets/images/Group 233.svg';

//styles
import "./SecondHeader.scss"

export const SecondHeader = () => {
    return (
        <div className="SecondHeader">
            <div className="container">
                <div className="Header__wrap--another">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="logo" />
                    </Link>
                    <nav className="Another-nav_wrapper">
                        <ul>
                            <li><Link to="/Product">FOOD</Link></li>
                            <li><Link to="/Catalog">CATALOG</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}
