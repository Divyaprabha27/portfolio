import React from 'react';
import { Element } from 'react-scroll';
import './skills.css';
import icon1 from '../../assets/html5.png';
import icon2 from '../../assets/css-3.png';
import icon3 from '../../assets/java-script.png';
import icon4 from '../../assets/bootstrap.png';
import icon5 from '../../assets/atom.png';
import icon6 from '../../assets/mysql.png';
import icon7 from '../../assets/database.png';
import icon8 from '../../assets/nodejs.png';
const skills = () => {
    return (
        <Element name="skills" id="skills" className="skills">
            <div className='container'>
                <h4>My Skills</h4>
                <h2>Technologies</h2>
                <div className='row skill-list'>
                    <div className='col-3'>
                        <div className='bg'>
                            <img src={icon1} className='img-fluid' alt='html5'/>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='bg'>
                            <img src={icon2} className='img-fluid' alt='css3'/>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='bg'>
                            <img src={icon3} className='img-fluid' alt='javascript'/>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='bg'>
                            <img src={icon4} className='img-fluid' alt='bootstrap'/>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='bg'>
                            <img src={icon5} className='img-fluid' alt='React'/>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='bg'>
                            <img src={icon6} className='img-fluid' alt='mysql'/>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='bg'>
                            <img src={icon7} className='img-fluid' alt='mongodb'/>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='bg'>
                            <img src={icon8} className='img-fluid' alt='nodejs'/>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default skills;