import React from 'react';
import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png'

const About = () =>{
    return (
      <div className="about">
        <div className="about-left">
            <img src={about_img} alt="aboutImg" className='about-img'/>
            <img src={play_icon} alt="playIcon" className='play-icon'/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tommorow's Leaders Today 
            </h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit soluta praesentium cumque eaque ullam ea ad nihil, fuga aut? Rerum omnis voluptatibus assumenda velit. Accusamus error quam numquam quo ducimus?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum reiciendis quo distinctio dolor minus corrupti, dolore recusandae molestias nam, sit laborum provident, perferendis ad nesciunt voluptatum quisquam! Aliquid, laborum autem.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, reprehenderit laborum temporibus maxime reiciendis neque perspiciatis sunt ea architecto maiores facilis dolorum eveniet aperiam dicta hic. Fugit esse illum optio?</p>
        </div>
      </div>
    );
}

export default About;