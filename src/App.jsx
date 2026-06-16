import { useState } from 'react'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import WhyWorkTogether from './components/WhyWorkTogether'

function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logo">Leszek Walszewski</div>
        <div className="nav-links">
          <a href="#about-me">Resume / About Me</a>
          <a href="#why-work-together">Why We Should Work Together</a>
        </div>
      </nav>
      
      <main>
        <Hero />
        <AboutMe />
        <WhyWorkTogether />
      </main>
    </div>
  )
}

export default App
