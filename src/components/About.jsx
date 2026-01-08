import './About.css'

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              I'm an <strong>Aspiring Software Developer</strong> with hands-on experience in 
              Full Stack Web Development using Java, Node.js, React.js, and MySQL. I'm passionate 
              about building scalable web applications, REST APIs, and real-time systems that 
              solve real-world problems.
            </p>
            <p className="about-description">
              With a strong academic background (CGPA 9.22) and multiple internships under my belt, 
              I've worked on enterprise-level applications including employee onboarding systems and 
              financial reconciliation modules. I thrive in collaborative environments and am always 
              eager to learn new technologies and best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
