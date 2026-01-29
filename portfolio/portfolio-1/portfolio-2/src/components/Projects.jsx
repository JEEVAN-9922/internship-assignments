import React from 'react'
import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React frontend and Node.js backend',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management app with real-time updates using WebSockets',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'WebSocket'],
      link: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with location-based forecasts and visualizations',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Axios'],
      link: '#'
    },
    {
      id: 4,
      title: 'Blog Platform',
      description: 'SEO-optimized blog platform with markdown support and user authentication',
      technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'Auth0'],
      link: '#'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Responsive portfolio website showcasing projects and skills',
      technologies: ['React', 'Vite', 'CSS3', 'JavaScript'],
      link: '#'
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Real-time chat application with user authentication and message history',
      technologies: ['Socket.io', 'Express', 'React', 'MongoDB'],
      link: '#'
    }
  ]

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Check out some of my recent work</p>
        
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
