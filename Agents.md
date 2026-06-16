# Agent Instructions & Project Context

Welcome! If you are an AI coding agent assigned to work on this project, please read this document first.

## Project Goal
This project is a **Web-Based Pitch Deck** for **Leszek Walszewski**, designed specifically to showcase his skills and background as a Backend PHP / Full-Stack Developer applying for a position at **Central Point**. The application serves as both a resume and a conversation agenda.

## Technology Stack
- **Framework:** React.js (v18)
- **Build Tool:** Vite
- **Styling:** Vanilla CSS (located in `src/index.css`). We use CSS variables to maintain a premium dark-mode theme. **Do not use Tailwind CSS** unless explicitly requested by the user.
- **Animations:** Framer Motion (`framer-motion`)
- **Icons:** Lucide React (`lucide-react`)
- **Deployment:** GitHub Pages (Automated via `.github/workflows/deploy.yml`)

## Key Architecture Rules
- **Base Path:** The project is configured to be deployed to GitHub pages under a sub-path (`/cv-pitch-deck/`). This is configured in `vite.config.js`. Ensure that any absolute paths or router setups respect this base path.
- **Assets:** Static assets like images (`profile_photo.jpg`, `profile_hobby.jpg`) are placed in the `public/assets/` directory.

## Core Components
- `src/components/Hero.jsx`: The top section featuring an introduction and the profile photo.
- `src/components/AboutMe.jsx`: Covers the core technologies, timeline of professional experience, side-projects, and hobbies.
- `src/components/WhyWorkTogether.jsx`: A heavily tailored section outlining why Leszek is the perfect fit for Central Point, his experience migrating legacy PHP code, and his 30-60 day plan.

## Design Philosophy
The UI must feel **premium, dynamic, and modern**.
- Always use the predefined CSS variables from `index.css` (e.g., `var(--bg-card)`, `var(--accent-primary)`).
- Implement subtle micro-animations (hover effects, scroll reveals) using Framer Motion to maintain a high "wow" factor.

## Agent Workflow
When modifying the code:
1. Preserve the specific messaging targeting Central Point.
2. Review `src/index.css` before adding new styles to ensure you reuse existing utility classes (`.section`, `.btn`, `.features-grid`).
3. Always verify changes locally using `npm run dev` or build validation `npm run build` before considering the task complete.
