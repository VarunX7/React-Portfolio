import React from 'react'
import "./hero.css"
import CTA from './CTA'
import Socials from './Socials'

const Hero = () => {
  return (
    <header>
      <div className="container header__container" id='hero'>
        <div className="section-heading"><h3>HOME</h3></div>
        <h5>Hello I'm</h5>
        <h1>Varun Parihar</h1>
        <h5 className='text-light'>Computer Science Engineer</h5>
        <CTA />
        <Socials />
      </div>
    </header>
  )
}

export default Hero
