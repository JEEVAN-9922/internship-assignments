import React from 'react'
import './About.css'

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate full-stack developer with over 5 years of experience in building web applications. 
              I love creating beautiful, responsive interfaces and robust backend systems that work seamlessly together.
            </p>
            <p>
              My journey in web development started with curiosity about how websites work, and it has evolved into 
              a career where I solve complex problems and build products that make a difference.
            </p>
            <p>
              When I'm not coding, you can find me contributing to open-source projects, writing technical blogs, 
              or exploring new technologies to stay ahead in this ever-evolving field.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>30+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>

          <div className="about-experience">
            <h3>Work Experience</h3>
            
            <div className="experience-item">
              <div className="experience-header">
                <h4>Senior Developer</h4>
                <span className="date">2022 - Present</span>
              </div>
              <p className="company">Tech Company Inc.</p>
              <p className="description">Lead development of frontend and backend systems, mentoring junior developers, and implementing best practices.</p>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h4>Full Stack Developer</h4>
                <span className="date">2020 - 2022</span>
              </div>
              <p className="company">Digital Solutions Ltd.</p>
              <p className="description">Developed responsive web applications using React and Node.js, improved performance by 40%.</p>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h4>Junior Developer</h4>
                <span className="date">2019 - 2020</span>
              </div>
              <p className="company">StartUp Studio</p>
              <p className="description">Collaborated on multiple projects, learned modern web technologies, contributed to codebase improvements.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
