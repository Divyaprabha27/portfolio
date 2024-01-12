import React from 'react';
import { Element } from 'react-scroll';
import './about.css';
import abtimg from '../../assets/about-image.jpg';
const about = () => {
    return (
        <Element name="about" className="about">
            <div className="container">
                <div className="row">
                    <div className="col-8 abt-cnt">
                        <h2>About Me</h2>
                        <p>Hello! I’m Divya Prabha.I have 5 years of 
                        experience as a Web Designer.I have worked 2014 to 2019.Then I quit my Job due to my personal reason. To restart
                        my career and expand my skills I have learned Full Stack 
                        Developer Course in Guvi.Looking forward to contributing my expertise.</p>
                        <div className="row abt-details">
                            <div className='col-4'>
                                <p>Name</p>
                                <p>DOB</p>
                                <p>Nationality</p>
                                <p>Mobile</p>
                                <p className='mob'>Email</p>
                                <p>Address</p>
                            </div>
                            <div className='col-1'>
                                <p>:</p>
                                <p>:</p>
                                <p>:</p>
                                <p>:</p>
                                <p>:</p>
                                <p>:</p>
                            </div>
                            <div className='col-7'>
                                <p>Divya Prabha</p>
                                <p>27 April 1993</p>
                                <p>Indian</p>
                                <p>+91 9600117891</p>
                                <p className='mob'>divyaprabha.it2014@gmail.com</p>
                                <p>D.No:6,Abinav Karthi Illam,Solar Pirivu,
                                    Karur Road,Near Vinayaga Driving School,
                                    Erode-638002.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 abt-img">
                        <img src={abtimg} className="img-fluid" alt="about-image"/>
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default about;