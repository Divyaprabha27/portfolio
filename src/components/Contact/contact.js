import React from 'react';
import './contact.css';
import { Element } from 'react-scroll';
const contact = () => {
    return (
        <Element name="contact" id="contact" className="contact">
            <div className='container'>
                <div className='contact-info'>
                    <h4>Get in Touch</h4>
                    <h2>Contact</h2>
                    <div className='con-det'>
                        <ul>
                            <li><span>Email:</span> divyaprabha.it2014@gmail.com</li>
                            <li><span>Mobile No:</span> +91 9600117891</li>
                            <li><span>Github Id:</span> Divyaprabha27</li>
                        </ul>
                    </div>                
                </div>
            </div>
            <div className='copyright'>
                <div className='container'>
                    <p>Designed by <span>Divya Prabha</span></p>
                </div>
            </div>
        </Element>
    );
};

export default contact;