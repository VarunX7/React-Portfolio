import React from 'react'
import "./experiance.css"
import { BsPatchCheckFill } from 'react-icons/bs'

const Experiance = () => {
  return (
    <section id='experiance'>
      <h5>What skill I have</h5>
      <h2>My Expertise</h2>

      <div className="container experiance__container">
        <div className="experiance__frontend">
          <h3>Web Development</h3>
          <div className="experiance__content">
          <article className='experiance__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
              <h4>HTML 5</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experiance__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
              <h4>CSS 3</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experiance__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
              <h4>Javascript</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experiance__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
              <h4>ReactJs</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experiance__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
              <h4>NodeJs</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experiance__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
              <h4>ExpressJs</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experiance__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
              <h4>MongoDb</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experiance__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
              <h4>Postman</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          </div>
        </div>

        <div className="experiance__backend">
        <h3>Software Development and ML</h3>
        <div className="experiance__content">
        <article className='experiance__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
              <h4>C++</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
        <article className='experiance__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
              <h4>DSA</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
        <article className='experiance__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
              <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
        <article className='experiance__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
              <h4>Tensorflow</h4>
              <small className='text-light'>Basics</small>
            </div>
          </article>
        <article className='experiance__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
              <h4>Scikit Learn</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
        <article className='experiance__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
              <h4>MySql</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
        <article className='experiance__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
              <h4>GitHub</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Experiance
