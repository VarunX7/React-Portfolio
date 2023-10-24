import React from 'react'
import "./footer.css"
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
import {MdOutlineEmail} from 'react-icons/md'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Varun Parihar</a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experiance">Expertise</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/v.s.rautela_07/" target='_blank' rel="noreferrer"><FiInstagram /></a>
        <a href="https://www.linkedin.com/in/varun-parihar-477782226/" target='_blank' rel="noreferrer"><BsLinkedin /></a>
        <a href="mailto:vsrautela07@gmail.com" target='_blank' rel="noreferrer"><MdOutlineEmail /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Varun Parihar. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
