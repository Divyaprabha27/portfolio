import React from 'react';
import { Element } from 'react-scroll';
import './home.css';
import resume from '../../document/DivyaResume.pdf';
const home = () => {
    
    return (
        <Element name="home" id="home" className="banner">
            <div className="bnr-cnt">
                <h3>Hello</h3>
                <h1>I am Divya Prabha</h1>
                <p>Full Stack Developer</p>
                <a href={resume} download="">Download CV</a>
            </div>
        </Element>
    );
};

export default home;