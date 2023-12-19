import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import insta from '../Assets/instagram_icon.png'
import pin from '../Assets/pintester_icon.png'
import whatup from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={insta} alt="" srcset="" />
        </div>
        <div className="footer-icons-container">
            <img src={pin} alt="" srcset="" />
        </div>
        <div className="footer-icons-container">
            <img src={whatup} alt="" srcset="" />
        </div>
      </div>

      <div className="footer-copyright">
        <hr />
        <p>Copyright @2023 - All right Reserved</p>
      </div>
    </div>
  )
}
export default Footer
