import React from 'react'
import Navbar from "../clientcomponents/header"
import Footer from "../clientcomponents/footer"
import Home from "../clientpage/Home"
import About from "../clientpage/AboutMe"
import Experience from "../clientpage/Experience"
import Services from "../clientpage/Services"
import Skills from '../clientpage/Skills'
import Projects from '../clientpage/Projects'
import Contact from '../clientpage/Contact'
import Education from '../clientcomponents/Education'


const RootLayout = () => {
  return (
    <div className='bg-white scroll-mt-[80px] sm:scroll-mt-[100px] '>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Education/>
      <Contact />
      <Footer />
    </div>
  )
}

export default RootLayout
