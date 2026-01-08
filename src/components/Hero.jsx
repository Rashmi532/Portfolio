import { useEffect, useState } from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const [typedText, setTypedText] = useState('')
  const fullText = 'Full Stack Developer'

  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text animate-fade-in-up">
            <h1 className="hero-name">
              Hi, I'm <span className="gradient-text">Rashmi J S</span>
            </h1>
            <h2 className="hero-title">
              Aspiring <span className="typing-text">{typedText}</span>
              <span className="cursor">|</span>
            </h2>
            <p className="hero-description">
              Building scalable web applications with Java, Node.js, React.js, and MySQL. 
              Passionate about creating innovative solutions and delivering exceptional user experiences.
            </p>
            <div className="hero-contact-info">
              <a href="mailto:jsrashmi5@gmail.com" className="contact-item">
                <FaEnvelope /> jsrashmi5@gmail.com
              </a>
              <a href="tel:+918123971011" className="contact-item">
                <FaPhone /> +91 81239 71011
              </a>
              <span className="contact-item">
                📍 Bangalore, India
              </span>
            </div>
            <div className="hero-social">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="floating-card">
              <div className="card-content">
                <div className="code-snippet">
                  <div className="code-line">
                    <span className="code-keyword">const</span>{' '}
                    <span className="code-variable">developer</span> = {'{'}
                  </div>
                  <div className="code-line indent">
                    <span className="code-property">name</span>: <span className="code-string">'Rashmi J S'</span>,
                  </div>
                  <div className="code-line indent">
                    <span className="code-property">role</span>: <span className="code-string">'Full Stack Developer'</span>,
                  </div>
                  <div className="code-line indent">
                    <span className="code-property">skills</span>: [<span className="code-string">'Java'</span>, <span className="code-string">'React'</span>, <span className="code-string">'Node.js'</span>],
                  </div>
                  <div className="code-line indent">
                    <span className="code-property">passion</span>: <span className="code-string">'Building Amazing Apps'</span>
                  </div>
                  <div className="code-line">{'}'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
