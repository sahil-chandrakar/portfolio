
# Portfolio

This is a personal portfolio site built using Vite + React + TypeScript. It contains components for a homepage, projects list, contact form, and a responsive navigation and footer.

**Quick Overview:**
- **Tech:** Vite, React, TypeScript, CSS
- **Purpose:** Personal portfolio to showcase projects and contact information

**Features:**
- Lightweight Vite dev server and fast builds
- Component-driven structure for reusable UI pieces (Navbar, Footer, Project cards)
- Simple, style-focused layout with modular CSS in `src/styles`

**Getting Started**

Prerequisites:
- Node.js (16+ recommended)

Install dependencies:

```powershell
npm install
```

Run development server:

```powershell
npm run dev
```

Build for production:

```powershell
npm run build
```

Preview production build locally:

```powershell
npm run preview
```

Note: The exact script names above follow typical Vite defaults. If your `package.json` uses different scripts, run those instead.

**Project Structure**

- `index.html` — HTML entry
- `vite.config.ts` — Vite configuration
- `src/main.tsx` — React entrypoint
- `src/App.tsx` — Top-level app component
- `src/index.css` — Global styles
- `src/components/` — Reusable UI components
	- `home/` — `Home.tsx`, `Hero.tsx`
	- `navbar/` — `Navbar.tsx`
	- `footer/` — `Footer.tsx`
	- `about/` — `About.tsx`
	- `contact/` — `Contact.tsx`
	- `project/` — `Project.tsx`, `ProjectCard.tsx`
- `src/styles/spacing.ts` — spacing tokens/helpers
- `src/utiles/data.ts` — data (projects, links, etc.) used by components

**How the app is organized**

- Components are focused and small: `ProjectCard` renders a single project, `Project` lists projects.
- Styles are simple and colocated via global `index.css` and style helpers in `src/styles`.
- Data is centralized in `src/utiles/data.ts` so content can be updated without changing components.

**Development Tips**
- Keep components presentational and push data to them via props.
- Add new project entries to `src/utiles/data.ts` — `ProjectCard` will render them automatically.
- Use Vite's fast refresh for rapid UI iteration.

**Contributing**
- Open an issue or submit a PR with a clear description of changes.

**Contact**
- Update the `Contact` component with your email/social links under `src/components/contact/Contact.tsx`.

**License**
- Add a license file or update this section with your chosen license.

