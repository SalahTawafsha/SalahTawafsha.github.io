# Salahaldin Tawafsha — Portfolio

**Live:** https://salahtawafsha.github.io/

Personal portfolio built with **React 18 + Vite 5 + Tailwind CSS 3**. Dark developer theme with a light-mode toggle, scroll-reveal animations, and a fully responsive layout.

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
```

## Build & preview

```bash
npm run build     # outputs static files to dist/
npm run preview   # serves dist/ at http://localhost:4173
```

## Edit content

All text (summary, experience, skills, education, contact) lives in **`src/data/profile.js`**.
The downloadable CV is `public/Salahaldin-Tawafsha-CV.pdf` — replace it to update the "Download CV" button.

## Deploy

Every push to `main` builds the site and publishes it to GitHub Pages via `.github/workflows/deploy.yml`.
You can also re-run it manually from the repo's **Actions** tab ("Deploy to GitHub Pages" → *Run workflow*).

## Structure

```
src/
  data/profile.js        # all portfolio content
  components/            # Navbar, Hero, About, Experience, Skills, Education, Contact, Footer
  hooks/useTheme.js      # dark/light theme, persisted in localStorage
  hooks/useReveal.js     # IntersectionObserver scroll animations
```
