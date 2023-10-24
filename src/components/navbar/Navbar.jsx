import React, { useState } from 'react'
import "./navbar.css"
import {AiOutlineHome, AiOutlineUser, AiOutlineFolderOpen} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'

const Navbar = () => {
  const [active, setActive] = useState('#')

  return (
    <nav>
      <a href="#" className={ active==='#' ? 'active' : '' } onClick={()=>{setActive('#')}}><AiOutlineHome /></a>
      <a href="#about" className={ active==='#about' ? 'active' : ''} onClick={()=>{setActive('#about')}}><AiOutlineUser /></a>
      <a href="#experiance" className={ active==='#experiance' ? 'active' : ''} onClick={()=>{setActive('#experiance')}}><BiBook /></a>
      <a href="#portfolio" className={ active==='#portfolio' ? 'active' : ''} onClick={()=>{setActive('#portfolio')}}><AiOutlineFolderOpen /></a>
      <a href="#contact" className={ active==='#contact' ? 'active' : ''} onClick={()=>{setActive('#contact')}}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Navbar
