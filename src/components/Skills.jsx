import { 
  FaJava, 
  FaPython, 
  FaReact, 
  FaNode, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaCode
} from 'react-icons/fa'
import { SiSpringboot, SiMysql, SiNestjs, SiNextdotjs, SiPostman, SiCplusplus } from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Java', icon: <FaJava />, level: 90 },
        { name: 'Python', icon: <FaPython />, level: 85 },
        { name: 'C++', icon: <SiCplusplus />, level: 80 },
        { name: 'C', icon: <FaCode />, level: 75 }
      ]
    },
    {
      title: 'Web Technologies',
      skills: [
        { name: 'React.js', icon: <FaReact />, level: 90 },
        { name: 'Node.js', icon: <FaNode />, level: 85 },
        { name: 'HTML5', icon: <FaHtml5 />, level: 90 },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 85 },
        { name: 'JavaScript', icon: <FaJs />, level: 88 }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'Spring Boot', icon: <SiSpringboot />, level: 85 },
        { name: 'NestJS', icon: <SiNestjs />, level: 80 },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 75 }
      ]
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'MySQL', icon: <SiMysql />, level: 90 },
        { name: 'REST APIs', icon: <FaDatabase />, level: 85 },
        { name: 'Git', icon: <FaGitAlt />, level: 85 },
        { name: 'GitHub', icon: <FaGithub />, level: 90 },
        { name: 'Postman', icon: <SiPostman />, level: 80 }
      ]
    }
  ]

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-container">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-icon">{skill.icon}</div>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
