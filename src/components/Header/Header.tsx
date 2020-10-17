import React from 'react';
import { Link } from "react-router-dom";

import logo from './../../assets/images/logo.svg';

//styles
import "./Header.scss"

export const Header = () => {
    return (
        <div className="Header">
            <img src={logo} alt="Logo" className="logo" />
            <nav className="nav_wrapper">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}
