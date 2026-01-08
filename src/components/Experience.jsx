import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: 'Software Development Intern',
      company: 'Qugates Technologies',
      location: 'Bangalore',
      period: 'Sep 2025 – Jan 2026',
      technologies: ['Node.js', 'React.js', 'MySQL', 'REST APIs'],
      description: [
        'Developed and maintained a full-stack web application using Node.js, React.js, and MySQL for internal business operations.',
        'Implemented employee onboarding (joining formalities) modules, handling form submissions, employee records, and document workflows.',
        'Built bank reconciliation functionality to match internal transaction records with bank statements, ensuring financial data accuracy.',
        'Designed and optimized MySQL database schemas, complex joins, and queries for efficient data retrieval and reporting.',
        'Developed and consumed RESTful APIs to manage employee data, financial records, and transactional workflows.',
        'Integrated frontend React components with backend APIs to enable real-time data updates and smooth user experience.'
      ]
    },
    {
      title: 'Java Full Stack Development Trainee',
      company: 'Kodnest Technologies',
      location: 'Bangalore',
      period: 'Mar 2025 – Jun 2025',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'React.js'],
      description: [
        'Developed and deployed full-stack web applications using Spring Boot and MySQL.',
        'Built responsive user interfaces using React.js, HTML, CSS, and JavaScript.',
        'Implemented RESTful APIs and integrated them with frontend components.',
        'Worked on CRUD operations, authentication flows, and backend business logic.'
      ]
    },
    {
      title: 'AI & ML Intern',
      company: 'Rooman Technologies Pvt Ltd',
      location: 'Bangalore',
      period: 'Sep 2024 – Feb 2025',
      technologies: ['Python', 'Machine Learning', 'AI Fundamentals'],
      description: [
        'Processed datasets and improved machine learning model accuracy through optimization techniques.',
        'Implemented ML algorithms for real-world automation and prediction systems.',
        'Tested and validated model performance across different datasets.'
      ]
    },
    {
      title: 'IIoT Intern',
      company: 'Enthu Technology Solutions Pvt Ltd',
      location: 'Bangalore',
      period: 'Aug 2023 – Sep 2023',
      technologies: ['IoT', 'LoRaWAN', 'C++'],
      description: [
        'Implemented LoRaWAN-based IIoT solutions for real-time data monitoring.',
        'Enhanced device connectivity, data transmission reliability, and system performance.',
        'Analyzed sensor data for operational insights and system improvements.'
      ]
    }
  ]

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <div className="experience-meta">
                    <span className="experience-company">{exp.company}</span>
                    <span className="experience-location">
                      <FaMapMarkerAlt /> {exp.location}
                    </span>
                  </div>
                  <div className="experience-period">
                    <FaCalendarAlt /> {exp.period}
                  </div>
                </div>
                <div className="experience-tech">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <ul className="experience-description">
                  {exp.description.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
