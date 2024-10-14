/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Prajwal Korade</span></h1>
        <p>A Full Stack Developer from Pune.</p>
        <br/>
        <div className='hero-action'>
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'><h5>Connect With me</h5></AnchorLink></div><br/>
            <a
              href="\RESUME_PRAJWAL (1).pdf"  // Direct path to the resume in the public folder
              download="My_Resume.pdf"  // Name of the file when downloaded
              style={{ textDecoration: 'none' }}  // Optional: Remove underline from the link
            >
            <div className='hero-resume'>My Resume</div>
            </a>
        </div>
    </div>
  )
}

export default Hero


