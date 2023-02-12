import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>JULIA JOHNSON</a>


      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/julia--johnson/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/jjohnson673" target="_blank"><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; jkjohnson. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer