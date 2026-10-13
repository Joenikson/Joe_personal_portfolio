# Joe Nikson: Developer Portfolio (v2)

My personal portfolio, rebuilt with React, TypeScript and Tailwind CSS. The first version is a plain HTML, CSS and JS site: [simple_portfolio](https://github.com/Joenikson/simple_portfolio).

<!-- Add your deployed URL and a screenshot here -->

## Sections

Hero, About, Services, Projects, Experience and Contact, with scroll animations and a responsive layout.

## Tech stack

- **Framework:** React 19, TypeScript
- **Build:** Vite 6
- **Styling:** Tailwind CSS 4
- **UI:** Lucide icons, Motion for animation

## Run locally

Prerequisite: Node.js 18 or newer.

```bash
git clone https://github.com/Joenikson/Joe_personal_portfolio.git
cd Joe_personal_portfolio
npm install
npm run dev
```

The app runs at `http://localhost:3000`.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server on port 3000 |
| `npm run build` | Production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Type-check with `tsc --noEmit` |

## Project structure

```
src/
├── components/   Navbar, Hero, About, Services, Projects, Experience, Contact, Footer
├── data.ts       portfolio content (profile, skills, projects, experience)
├── types.ts      shared TypeScript types
└── assets/       images
```

Content lives in `src/data.ts`, so updating the portfolio doesn't require touching components.

## Author

**Joe Nikson**: [GitHub](https://github.com/Joenikson) · [LinkedIn](https://linkedin.com/in/joenikson-j-b0a0032a0)
