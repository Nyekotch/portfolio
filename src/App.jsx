import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contacts from './components/Contacts'
import Skills from './components/Skills'
import Footer from './components/Footer'
import './index.css'

function App() {

  return (
    <div>
      <Navbar />
      <Hero/>
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contacts />
      <Footer />
      
    </div>
  )
}

export default App
