# math-tiles

Arithmetic practice app for primary school children. Built with React 19, Vite 8, TypeScript 5 (strict), Tailwind CSS 4, and react-router-dom v6 (HashRouter).

## Commands

```bash
yarn start          # dev server (http://localhost:3070)
yarn build          # production build → dist/
yarn preview        # preview production build locally
yarn test           # run tests (vitest run)
yarn test:watch     # vitest in watch mode
yarn test:coverage  # vitest with coverage report
yarn lint           # ESLint (read-only, used in CI)
yarn lint:fix       # ESLint with auto-fix
yarn typecheck      # tsc --noEmit
```

## Architecture

- **State:** React Context (`src/store/index.tsx`) — five boolean state pairs (`sounds`, `started`, `menu`, `right`, `wrong`), stored via `useLocalStorage`/`useSessionStorage` hooks
- **Routing:** HashRouter with a flat route table in `App.tsx`; exercise slugs are defined in `src/utils/index.ts`
- **Styling:** Tailwind CSS 4 via `@tailwindcss/vite` plugin; custom component classes in `src/styles/tailwind.css` using `@layer components`; no `tailwind.config.js` (config in CSS)
- **Speech:** `synthSpeak` in `src/utils/index.ts` wraps the Web Speech API; called from exercise components on each new question

## Notes

- `useSessionStorage` reads and writes from `sessionStorage` (a pre-existing bug where it read from `localStorage` was fixed during the TypeScript migration)
- `synthSpeak` guards against `undefined` text before constructing `SpeechSynthesisUtterance`; this can occur when `sounds` is true but no `message` or matching `status` is provided
- Tailwind 4 breakpoints: `md` = `768px`, `lg` = `1024px` (used as raw pixel values in `tailwind.css` since `@screen` was removed in v4)
