import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Front Desk System',
      description: 'A comprehensive web-based clinic management system for managing patient queues, doctor profiles, and appointments with real-time tracking.',
      technologies: ['NestJS', 'Next.js', 'MySQL', 'JWT'],
      features: [
        'JWT-secured authentication',
        'Real-time queue & appointment status tracking',
        'Doctor profile management',
        'Patient queue management'
      ],
      github: 'https://github.com/Rashmi532/NestJS_Application',
      demo: '#'
    },
    {
      title: 'Employee Management System',
      description: 'A full-stack CRUD application for managing employee records with secure data storage and RESTful API integration.',
      technologies: ['Spring Boot', 'MySQL', 'Thymeleaf'],
      features: [
        'Complete CRUD operations',
        'RESTful APIs for data operations',
        'Secure data storage in MySQL',
        'Smooth frontend-backend integration'
      ],
      github: 'https://github.com/Rashmi532/Employee_CRUD_SpringBoot',
      demo: '#'
    },
    {
      title: 'Deep Learning Animal Species Detection',
      description: 'A real-time detection model using YOLOv8 for multi-species recognition in diverse environments with 95% accuracy.',
      technologies: ['Python', 'OpenCV', 'YOLOv8', 'Deep Learning'],
      features: [
        '95% accuracy in species detection',
        'Real-time processing capabilities',
        'Multi-species recognition',
        'Works in diverse environments'
      ],
      github: 'https://github.com/Rashmi532/animal-species-detection-using-yolo_v8-algorithm',
      demo: '#'
    },
    {
      title: 'Wildlife Tracking System',
      description: 'A database-driven website to log and manage wildlife sightings with improved data retrieval and conservation reporting.',
      technologies: ['PHP', 'CSS', 'MySQL'],
      features: [
        'Wildlife sighting logging',
        'Efficient data retrieval',
        'Conservation reporting',
        'Database-driven architecture'
      ],
      github: 'https://github.com/Rashmi532/Wildlife-Animal-Spotting-Management-main',
      demo: '#'
    }
  ]

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaGithub />
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge">{tech}</span>
                ))}
              </div>
              <ul className="project-features">
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
