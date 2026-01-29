# Developer Portfolio - React + Vite

A modern, responsive developer portfolio website built with React and Vite. Features a stunning design with smooth animations, project showcases, skills display, and contact form.

## Features

- ⚡ **Fast Development** - Built with Vite for instant HMR
- 🎨 **Modern Design** - Beautiful gradient backgrounds and smooth animations
- 📱 **Responsive** - Fully responsive design for all devices
- 🚀 **Performance** - Optimized for fast loading and smooth interactions
- 📧 **Contact Form** - Integrated contact form for client inquiries
- 🎯 **SEO Ready** - Optimized meta tags and semantic HTML

## Sections

- **Header** - Sticky navigation with smooth scrolling
- **Hero** - Eye-catching intro section with call-to-action
- **Projects** - Showcase of featured projects with technologies
- **Skills** - Technical skills organized by category
- **About** - Personal background and work experience
- **Contact** - Contact information and contact form
- **Footer** - Links and copyright information

## Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite 4
- **Styling**: CSS3 with CSS Variables
- **Animations**: CSS animations and transitions

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project folder
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will open automatically at `http://localhost:3000`

### Build

Create a production build:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Header.css
│   ├── Hero.jsx
│   ├── Hero.css
│   ├── Projects.jsx
│   ├── Projects.css
│   ├── Skills.jsx
│   ├── Skills.css
│   ├── About.jsx
│   ├── About.css
│   ├── Contact.jsx
│   ├── Contact.css
│   ├── Footer.jsx
│   └── Footer.css
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## Customization

### Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #3a86ff;
  --secondary-color: #fb5607;
  --dark-bg: #0a0e27;
  --light-text: #ffffff;
  --light-gray: #e8eef6;
  --dark-gray: #2a2a3e;
}
```

### Content

Update portfolio content by editing the respective component files:
- Update project data in `src/components/Projects.jsx`
- Update skills in `src/components/Skills.jsx`
- Update about section in `src/components/About.jsx`
- Update contact info in `src/components/Contact.jsx`

### Smooth Scrolling

The portfolio features smooth scrolling. Navigate using the header menu buttons or direct section links.

## Features

### Responsive Design

The portfolio is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

### Animations

- Floating shapes in hero section
- Card hover effects
- Smooth transitions on interactions
- Animated skill tags
- Fade-in animations

## Contact Form

The contact form is functional and ready to be integrated with a backend service. Currently, it logs to the console and shows a success message.

## Performance

- Optimized images and assets
- Lazy loading support ready
- Minimized CSS and JavaScript
- Fast cold start with Vite

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Author

Your Name - Full Stack Developer

## Support

For support or questions, please reach out via:
- Email: hello@example.com
- GitHub: [@yourname](https://github.com/yourname)

---

Made with ♥ for developers
