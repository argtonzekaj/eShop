import React from 'react'

//styles
import './Footer.scss'


//photos
import logo from './../../assets/images/Group 233.svg';
import footerlogo from './../../assets/images/icon-footer.svg';

export const Footer = () => {
    return (
        <div className="Footer">
            <div className="container">
                <div className="footerWrap">
                    <div className="column-3">
                        <div className="footer__logo-content">
                            <img src={logo} className="logo-footer" alt="img"/>
                            <p>House My Brand designs clothing for the young, the old & everyone in between – but most importantly, for the fashionable</p>
                            <img src={footerlogo} alt="img"/>
                        </div>
                    </div>
                    <div className="column-2">
                        <div className="shopping_items">
                            <h5>Shopping online</h5>
                            <ul className="nav_bar">
                                <li>Order Status</li>
                                <li>Shipping and Delivery</li>
                                <li>Returns</li>
                                <li>Payment Options</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                    <div className="column-2">
                        <div className="information_items">
                            <h5>Information</h5>
                            <ul className="nav_bar">
                                <li>Order Status</li>
                                <li>Shipping and Delivery</li>
                                <li>Returns</li>
                                <li>Payment Options</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                    <div className="column-2">
                        <div className="contact_items">
                            <h5>Contact</h5>
                            <ul className="nav_bar">
                                <li>store@uikit.com</li>
                                <li>Hotline: +1 131 138 138</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container">
                    <div className="footer__bottom-text">
                        <p>DESIGN BY ICEO.CO - © 2019. ALL RIGHTS RESERVED.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
