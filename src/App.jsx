import { useState } from 'react'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import WhyWorkTogether from './components/WhyWorkTogether'

function App() {
  const [navOpen, setNavOpen] = useState(false)

  const closeNav = () => setNavOpen(false)

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logo">Leszek Walszewski</div>
        <div className={`nav-links${navOpen ? ' open' : ''}`}>
          <a href="#about-me" onClick={closeNav}>Resume / About Me</a>
          <a href="#why-work-together" onClick={closeNav}>Why We Should Work Together</a>
        </div>
        <button
          className={`nav-toggle${navOpen ? ' active' : ''}`}
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      <div
        className={`nav-overlay${navOpen ? ' open' : ''}`}
        onClick={closeNav}
      />
      
      <main>
        <Hero />
        <AboutMe />
        <WhyWorkTogether />
      </main>
    </div>
  )
}

export default App
