import React from 'react'
import './about.css'
import ME from '../../assets/headshot1.png'


const About = () => {
  return (
    <section className='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <p>
          My name is Julia and I am currently enrolled in UNC Chapel Hill’s Coding Bootcamp. I recently started learning the basics of coding through my current job position and I immediately wanted to learn more and push myself. I do struggle with some things some of the time– but I am excited to see where my progression takes me.  Feel free to take a look at some of my recent works and my progress as I learn more! Questions and constructive criticism are always welcome.          </p>

          <a href="#contact" className='btn btn-primary'>Let's Connect!</a>
        </div>
      </div>
    </section>
  )
}

export default About