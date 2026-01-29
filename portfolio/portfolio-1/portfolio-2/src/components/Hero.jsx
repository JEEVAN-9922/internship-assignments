import React from 'react'
import './Hero.css'

function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'm a Full Stack Developer</h1>
            <p>I create beautiful, responsive web applications with modern technologies</p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={scrollToContact}>Get In Touch</button>
              <a href="#projects" className="btn-secondary">View My Work</a>
            </div>
          </div>
          <div className="hero-shape">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
