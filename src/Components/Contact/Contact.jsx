//import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import linkedin from '../../assets/linkedin.png'
import mail from '../../assets/mail.png'
import github from '../../assets/github.png'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "17d6706f-549c-46a8-9e21-b867b688da71");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
        }
    };


    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let’s talk</h1>
                    <p>I’m currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                    <br />
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /><p>prajwalkorade@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /><p>+91 9552260011</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /><p>Pune</p>
                        </div>
                    </div>
                    <br /><br/>
                    <br /><br/>
                    <div className="contact-detail-socialmedia">
                        <div className="contact-detail-media">
                        <a href="https://www.linkedin.com/in/prajwal-korade-2024b1247/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="" />
                        </a>
                        </div>
                        <div className="contact-detail-media">
                        <a href="mailto:prajwalkorade@gmail.com?subject=Hello&body=I wanted to say hi!">
                            <img src={mail} alt="" /></a>
                        </div>
                        <div className="contact-detail-media">
                        <a href="https://github.com/Prajwal3702" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="" />
                        </a>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label >Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label >Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' />
                    <label >Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                    <button type='submit' className="contact-submit">Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact