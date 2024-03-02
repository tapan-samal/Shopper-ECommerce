import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import inst_icon from '../Assets/instagram_icon.png'
import pin_icon from '../Assets/pintester_icon.png'
import whats_icon from '../Assets/whatsapp_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="FooterLogo" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container">
                <img src={inst_icon} alt="Instagram" />
            </div>
            <div className="footer-icon-container">
                <img src={pin_icon} alt="Pintester" />
            </div>
            <div className="footer-icon-container">
                <img src={whats_icon} alt="WhatsApp" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2023 - All right Reserved.</p>
        </div>
    </div>
  );
};

export default Footer;