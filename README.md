# Math Tiles

[craigmcn.com/math-tiles](https://www.craigmcn.com/math-tiles/)

[![Test](https://github.com/craigmcn/math-tiles/workflows/test/badge.svg)](https://github.com/craigmcn/math-tiles/actions/workflows/test.yml)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Node](https://img.shields.io/badge/node-v24-brightgreen)](https://nodejs.org)

Arithmetic practice app for primary school children. Choose an exercise from the menu, answer questions by selecting a number tile, and get immediate feedback — with optional spoken prompts via the Web Speech API.

## Exercises

- **One More / One Less** — identify the number that is one more or one less than the one shown
- **Between** — find the number that goes between two given numbers
- **Add / Subtract** — practice addition and subtraction with small numbers
- **Higher / Lower** — decide whether the answer is higher or lower than a target

---

## Stack

- [React](https://react.dev/) 19 + [TypeScript](https://www.typescriptlang.org/) 5, built with [Vite](https://vitejs.dev/) 8
- [Tailwind CSS](https://tailwindcss.com/) 4 via `@tailwindcss/vite` plugin (CSS-based config, no `tailwind.config.js`)
- [react-router-dom](https://reactrouter.com/) v6 (HashRouter)
- Web Speech API for spoken question prompts

## Development

```bash
node --version   # should be v24
yarn install
yarn start       # dev server at http://localhost:5173
yarn build       # type-check + build to dist/
yarn lint        # ESLint (read-only)
yarn lint:fix    # ESLint with auto-fix
yarn typecheck   # tsc --noEmit
```

## Testing

Vitest + Testing Library. 14 tests across 3 files covering utils, hooks, and key components.

```bash
yarn test           # single pass
yarn test:watch     # watch mode
yarn test:coverage  # single pass with coverage report
```

## Deployment

Deployed on Netlify as a sub-path app under `craigmcn.com`. Vite base is set to `/math-tiles/` in `vite.config.ts`. Favicons are served from the parent `craigmcnaughton` app.
