import React from 'react'
import CV from '../../assets/Julia_Johnson_Resume 2023.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Connect!</a>
    </div>
  )
}

export default CTA