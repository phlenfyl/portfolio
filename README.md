# Portfolio

Personal portfolio for Damilola Peter Meshe, backend engineer (Python, Django, AWS).

Paper-and-grid spec-sheet layout with architecture diagrams, an incident log and a sticky sidebar.

Built with Next.js 16 and React 19, with no UI libraries.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Editing content

All copy (bio, projects, experience, stack, links) lives in `src/data/content.ts`. Components in `src/components/` only handle layout. The CV served at `/Damilola_Meshe_CV.pdf` is in `public/`.
