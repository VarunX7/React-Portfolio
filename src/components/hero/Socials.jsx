import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {MdOutlineEmail} from 'react-icons/md'

const Socials = () => {
  return (
    <div className='socials'>
      <a href="https://www.linkedin.com/in/varun-parihar-477782226/" target='_blank' rel="noreferrer" ><BsLinkedin /></a>
      <a href="mailto:vsrautela07@gmail.com" target='_blank' rel="noreferrer"><MdOutlineEmail/></a>
      <a href="https://github.com/VarunX7" target='_blank' rel="noreferrer"><FaGithub /></a>
    </div>
  )
}

export default Socials
