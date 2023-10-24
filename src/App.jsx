import React from 'react'
import ParticleBackground from './components/Particles';
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Experiance from './components/experiance/Experiance'
import Navbar from './components/navbar/Navbar'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer';


const App = () => {
  return (
    <>
      <ParticleBackground />
      <Hero />
      <Navbar />
      <About />
      <Experiance />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App
