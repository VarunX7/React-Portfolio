import React,  { useRef } from 'react'
import emailjs from 'emailjs-com'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiFillGithub} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3urbgdg', 'template_izxz8bv', form.current, '1m7DddQweTpFpyHdz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail  className='contact__option-icon'/>
            <h4>Email</h4>
            <a href="mailto:vsrautela07@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className='contact__option-icon'/>
            <h4>linkedIn</h4>
            <a href="https://www.linkedin.com/in/varun-parihar-477782226/" target='_blank' rel="noreferrer" >Connect</a>
          </article>
          <article className="contact__option">
            <AiFillGithub className='contact__option-icon'/>
            <h4>Github</h4>
            <a href="https://github.com/VarunX7" target='_blank' rel="noreferrer">View Projects</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name='message' placeholder='Your Message' rows={10} required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
