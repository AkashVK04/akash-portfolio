# Akash V K — Portfolio

A minimal, premium dark-themed personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

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
  data.js        # all editable content (name, projects, skills, links, etc.)
  App.jsx
  main.jsx
  index.css
```

All content lives in `src/data.js` — this is the only file you need to edit for text, links, or project changes. No other files need touching for content updates.

---

## Adding your photo

1. Save your photo into the `public/` folder, e.g. `public/profile.jpg`.
2. Open `src/data.js` and set:
   ```js
   photo: '/profile.jpg',
   ```
   inside the `profile` object. Leave it as `null` to keep the initials avatar.

## Adding your GitHub profile link

Open `src/data.js` and set:
```js
github: 'https://github.com/your-username',
```
inside the `profile` object. Once set, a GitHub icon button appears in the hero section and a GitHub card appears in Contact automatically.

*(Per-project GitHub links — like the one already on HireSense AI — are set individually per project, see below.)*

## Editing / adding projects

Each project lives in the `projects` array in `src/data.js`:
```js
{
  title: 'Project Name',
  subtitle: 'Short one-line subtitle',
  description: 'A few sentences describing the project.',
  features: ['Feature one', 'Feature two'],
  stack: ['React.js', 'Node.js'],
  live: 'https://your-live-demo-url.com',   // or null if none
  github: 'https://github.com/you/repo',    // or null if none
  featured: false,                          // true = full-width highlighted card
}
```
To add a new project, copy this object and add it to the array. To edit an existing one, just change the values — the layout updates automatically.

## Adding certificate links

Each certificate in the `certifications` array in `src/data.js` supports an optional `link`:
```js
{
  title: 'HackerRank Java (Basics) Certificate',
  issuer: 'HackerRank',
  link: 'https://www.hackerrank.com/certificates/xxxxxxxx',
}
```
When `link` is set, the whole certificate card becomes clickable and opens the certificate/credential in a new tab. Leave `link: null` if you don't have one for a given certificate.

## Contact form → delivers to your Gmail

The contact form uses [Formspree](https://formspree.io) (free) to deliver messages straight to your Gmail inbox — no backend server needed.

1. Go to **https://formspree.io** and sign up free using your Gmail address.
2. Click **New Form**, give it a name (e.g. "Portfolio Contact"), and create it.
3. Formspree gives you an endpoint like `https://formspree.io/f/xxxxaaaa`. Copy the `xxxxaaaa` part — that's your form ID.
4. Open `src/data.js` and set:
   ```js
   export const contactConfig = {
     formspreeId: 'xxxxaaaa',
   }
   ```
5. Redeploy (or restart `npm run dev`). Messages submitted through the form will now land directly in your Gmail inbox, and visitors see an inline "Message sent" confirmation.

**Until you configure this**, the form still works — it opens the visitor's email app with the message pre-filled instead of sending it directly. So the site is fully functional either way.

Formspree's free plan includes 50 submissions/month, which is plenty for a personal portfolio.

## Customizing further

- **Colors**: edit the `colors` block in `tailwind.config.js`.
- **Fonts**: Space Grotesk (display), Inter (body), and JetBrains Mono (labels/tags) are loaded via Google Fonts in `index.html`.
