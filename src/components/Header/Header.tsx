import React from 'react';
import { Link } from "react-router-dom";

import logo from './../../assets/images/Group 232.svg';

//styles
import "./Header.scss"

export const Header = () => {
    return (
        <div className="Header">
            <div className="container">
                <div className="headerWrap">
                    <Link to="/"> <img src={logo} alt="Logo" className="logo-first" /></Link> 
                    <nav className="nav_wrapper">
                        <ul className="nav_list">
                            <li><Link to="/Product">FOOD</Link></li>
                            <li><Link to="/Catalog">CATALOG</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}
