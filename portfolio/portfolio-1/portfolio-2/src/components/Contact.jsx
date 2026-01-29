import React, { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    
    setTimeout(() => {
      setSubmitted(false)
    }, 5000)
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's discuss your next project</p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <h3>Email</h3>
              <a href="mailto:hello@example.com">hello@example.com</a>
            </div>
            
            <div className="info-item">
              <h3>Phone</h3>
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </div>
            
            <div className="info-item">
              <h3>Location</h3>
              <p>San Francisco, CA</p>
            </div>

            <div className="social-links">
              <h3>Follow Me</h3>
              <div className="socials">
                <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Portfolio</a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project..."
                rows="6"
              ></textarea>
            </div>

            <button type="submit" className="btn-primary">Send Message</button>
            
            {submitted && (
              <div className="success-message">
                ✓ Thank you! Your message has been sent successfully.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
