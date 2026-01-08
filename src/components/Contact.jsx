import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-description">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology. Feel free to reach out!
            </p>
            <div className="contact-details">
              <a href="mailto:jsrashmi5@gmail.com" className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-text">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">jsrashmi5@gmail.com</span>
                </div>
              </a>
              <a href="tel:+918123971011" className="contact-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-text">
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">+91 81239 71011</span>
                </div>
              </a>
              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-text">
                  <span className="contact-label">Location</span>
                  <span className="contact-value">Bangalore, India</span>
                </div>
              </div>
            </div>
            <div className="social-links">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-button"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-button"
                aria-label="GitHub"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
            </div>
          </div>
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <textarea 
                  placeholder="Your Message" 
                  className="form-input form-textarea"
                  rows="6"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="footer">
          <p>&copy; 2025 Rashmi J S. All rights reserved.</p>
          <p>Built with React & Vite</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
