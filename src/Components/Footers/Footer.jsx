import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import Instagram_icon from '../Assets/instagram_icon.png'
import pintrest_icon from '../Assets/pintester_icon.png'
import Whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>FASHIONS</p>
        </div>
        <ul className='footer-link'>
            <li>Company</li>
            <li>Product</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container">
                <img src={Instagram_icon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={pintrest_icon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={Whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2023 -All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer