import React from 'react'
import './about.css'
import Me from '../../assets/me1.png'
import { FaPython } from 'react-icons/fa'
import { BsDatabaseAdd } from 'react-icons/bs'
import { TbBrandNodejs } from 'react-icons/tb'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="My pic" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <TbBrandNodejs className='about__icons'/>
              <h5>Fullstack Development</h5>
            </article>

            <article className='about__card'>
              <FaPython className='about__icons'/>
              <h5>Data Science and ML</h5>
            </article>
            <article className='about__card'>
              <BsDatabaseAdd className='about__icons'/>
              <h5>Software Development</h5>
            </article>
          </div>

          <p>Hi! I'm a freshly graduated computer science engineer with a strong foundation in web development, data science, and machine learning. My knowledge encompasses core concepts of data structures and algorithms, as well as a sound knowledge of RDBMS. Proficient in programming languages like C++, Python, and JavaScript, I'm dedicated to creating innovative solutions and solving complex problems. With a commitment to continuous learning, I'm excited to contribute to cutting-edge projects and collaborate with like-minded individuals.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
