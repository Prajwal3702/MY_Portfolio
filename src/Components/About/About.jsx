/* eslint-disable no-unused-vars */
import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.png'

const About = () => {
  return (
    <div id='about'className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src= {theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src= {profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Hello! I’m Prajwal Korade, a recent Bachelor of Engineering(Information Technology) graduate with a strong passion for web development. My journey into coding began with a fascination for how websites are built and how they function, leading me to pursue hands-on experience in crafting engaging and user-friendly web applications. Throughout my studies, I’ve worked on several projects that showcase my skills in creating responsive and dynamic websites. I’m excited about the opportunity to contribute to innovative projects and collaborate with experienced developers. My goal is to continue learning and growing in the field, and I’m particularly interested in exploring full-stack development.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width: '50%'}}></hr></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width: '70%'}}></hr></div>
                    <div className="about-skill"><p>Core Java</p><hr style={{width: '60%'}}></hr></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width: '50%'}}></hr></div>
                </div>
            </div>
        </div><br/>
        <div className="about-achievements">
            <hr />
            <div className="about-achievement">
                <h1>4+</h1>
                <br/>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            
        </div>
    </div>
  )
}

export default About

/*<div className="about-achievement">
<h1>4+</h1>
<br/>
<p>PROJECT COMPLETED</p>
</div>
<hr />
<div className="about-achievement">
<h1>5+</h1>
<br/>
<p>Years Of Experience</p>
</div>*/