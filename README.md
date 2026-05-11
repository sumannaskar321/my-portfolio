# Suman Naskar — Portfolio

My portfolio built with React & Vite.

## Project Structure

```
src/
  data.js     ← Edit YOUR content here (name, projects, skills, etc.)
  App.jsx     ← All components and layout
  main.jsx    ← Entry point
index.html
vite.config.js
package.json
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## How to Customize

**All your content lives in `src/data.js`** — open it and update:

- `profile` — your name, initials, tagline, bio
- `socials` — your real email, GitHub, LinkedIn, Twitter links
- `stats` — years of experience, projects, team size
- `experience` — your job history
- `projects` — name, description, GitHub URL, live URL
- `skills` — tech stack grouped by category

**To add your photo:** set `photo: "/your-photo.jpg"` in `profile` and place the image in the `public/` folder.

## Deploy to Vercel

```bash
npm run build
# Then drag the `dist/` folder to vercel.com
```

Or connect your GitHub repo to Vercel for automatic deploys.
