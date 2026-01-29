import React from 'react'
import './Skills.css'

function Skills() {
  const skills = {
    'Frontend': ['React', 'Vue.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
    'Backend': ['Node.js', 'Express.js', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'],
    'Tools & Others': ['Git', 'Docker', 'AWS', 'Webpack', 'Vite', 'Firebase', 'Linux', 'CI/CD']
  }

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">Technologies I work with</p>
        
        <div className="skills-container">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="skill-category">
              <h3>{category}</h3>
              <div className="skill-list">
                {skillList.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <span>{skill}</span>
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
