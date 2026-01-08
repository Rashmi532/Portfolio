import { FaGraduationCap, FaAward } from 'react-icons/fa'
import './Education.css'

const Education = () => {
  const education = [
    {
      degree: 'B.E. in Computer Science Engineering',
      institution: 'Rajarajeswari College of Engineering',
      year: '2025',
      grade: 'CGPA: 9.22',
      icon: <FaGraduationCap />
    },
    {
      degree: 'Class 12',
      institution: 'SJM Independent PU College',
      year: '2021',
      grade: '97.5%',
      icon: <FaGraduationCap />
    },
    {
      degree: 'Class 10',
      institution: 'St. Joseph Convent High School',
      year: '2019',
      grade: '91.84%',
      icon: <FaGraduationCap />
    }
  ]

  const certifications = [
    {
      title: 'NPTEL Elite: Joy of Computing using Python',
      issuer: 'NPTEL',
      icon: <FaAward />
    },
    {
      title: 'Infosys: Programming in C',
      issuer: 'Infosys',
      icon: <FaAward />
    },
    {
      title: 'DevHack\'s National Hackathon: Hospital Management Website Development',
      issuer: 'DevHack',
      icon: <FaAward />
    }
  ]

  return (
    <section id="education" className="education section">
      <div className="container">
        <h2 className="section-title">Education & Certifications</h2>
        <div className="education-content">
          <div className="education-section">
            <h3 className="subsection-title">Education</h3>
            <div className="education-timeline">
              {education.map((edu, index) => (
                <div key={index} className="education-card">
                  <div className="education-icon">{edu.icon}</div>
                  <div className="education-details">
                    <h4 className="education-degree">{edu.degree}</h4>
                    <p className="education-institution">{edu.institution}</p>
                    <div className="education-meta">
                      <span className="education-year">{edu.year}</span>
                      <span className="education-grade">{edu.grade}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="certifications-section">
            <h3 className="subsection-title">Certifications</h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-card">
                  <div className="certification-icon">{cert.icon}</div>
                  <div className="certification-content">
                    <h4 className="certification-title">{cert.title}</h4>
                    <p className="certification-issuer">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
