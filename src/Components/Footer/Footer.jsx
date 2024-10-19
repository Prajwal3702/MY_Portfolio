//import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src= {footer_logo} alt="" />
                <p>I am a full stack developer from, Pune recently graduated from Sinhgad Institute Of Technology And Science.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src= {user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe"><p>Subscribe</p></div>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2024 Prajwal Korade. All rights reserved.</p>
            <div className="footer-bottom-right">
                <div className='footer-termservices'><AnchorLink className='anchor-link' offset={50} href='#termservices'><p>Term of Services</p></AnchorLink></div>
                <div className='footer-privacypolicy'><AnchorLink className='anchor-link' offset={50} href='#privacypolicy'><p>Privacy Policy</p></AnchorLink></div>
                <div className='footer-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'><p>Connect with me</p></AnchorLink></div>
            </div>
        </div>
    </div>
  )
}

export default Footer