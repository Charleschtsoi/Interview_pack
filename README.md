# Charles Tsoi - Resume Website

A modern, responsive resume website built with React, showcasing professional experience, projects, and skills.

## Features

- **Modern Design**: Clean, minimal interface optimized for professional presentation
- **Responsive**: Fully responsive design that works on all devices
- **Fast**: Optimized for performance with React best practices
- **Accessible**: Built with accessibility in mind (ARIA labels, keyboard navigation)
- **SEO Optimized**: Proper meta tags and semantic HTML

## Technology Stack

- React 18
- CSS3 (Custom properties, Flexbox, Grid)
- GitHub Pages (Hosting)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Interview_pack
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The site will open at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Deployment

This site is configured for GitHub Pages deployment. There are two deployment options:

### Option 1: Automatic Deployment (Recommended)

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys the site when you push to the `main` branch.

To enable:
1. Go to your repository Settings > Pages
2. Under "Source", select "GitHub Actions"
3. Push to the `main` branch to trigger deployment

### Option 2: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy using gh-pages:
```bash
npm run deploy
```

## Project Structure

```
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Competencies.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Certifications.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── experience.js
│   │   ├── projects.js
│   │   ├── skills.js
│   │   ├── education.js
│   │   └── contact.js
│   ├── styles/
│   │   ├── index.css
│   │   ├── App.css
│   │   └── animations.css
│   ├── App.jsx
│   └── index.js
├── .github/
│   └── workflows/
│       └── deploy.yml
└── package.json
```

## Customization

To update the content:

1. **Experience**: Edit `src/data/experience.js`
2. **Projects**: Edit `src/data/projects.js`
3. **Skills**: Edit `src/data/skills.js`
4. **Education**: Edit `src/data/education.js`
5. **Contact**: Edit `src/data/contact.js`

## License

This project is private and personal.

## Contact

Charles Tsoi
- Email: charleschtsoi@gmail.com
- LinkedIn: [linkedin.com/in/charleschtsoi](https://www.linkedin.com/in/charleschtsoi/)
- GitHub: [github.com/Charleschtsoi](https://github.com/Charleschtsoi/)
