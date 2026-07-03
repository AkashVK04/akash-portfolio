# Akash V K — Portfolio

A minimal, professional personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

The production-ready static files are output to the `dist/` folder, which can be deployed to Vercel, Netlify, GitHub Pages, or any static host.

## Project structure

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    Education.jsx
    Certifications.jsx
    Contact.jsx
    Footer.jsx
    SectionHeading.jsx
  data.js        # all editable content (name, projects, skills, etc.)
  App.jsx
  main.jsx
  index.css
```

## Customizing

- **Content**: edit `src/data.js` — this drives the hero, about, skills, projects, education, and certifications sections.
- **Profile photo**: replace the initials avatar in `src/components/Hero.jsx` (the `card` block with the initials) with an `<img>` tag pointing to your photo in `public/`.
- **Colors**: edit the `colors` block in `tailwind.config.js`.
- **Fonts**: Space Grotesk (display), Inter (body), and JetBrains Mono (labels/tags) are loaded via Google Fonts in `index.html`.
