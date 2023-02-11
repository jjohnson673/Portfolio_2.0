import React from 'react'
import './header.css'
import CTA from './CTA'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
        <h5>Welcome! I'm</h5>
        <h1>Julia Johnson</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
      </div>
    </header>
  )
}

export default Header