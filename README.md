# CountryPeek

CountryPeek is a React app that lets users search and explore country data with a modern UI and interactive features.

## Live Demo
https://revanthbalams143-cell.github.io/country-peek/

## Features
- Search countries by name with debounce-enabled API calls
- Filter by region and sort results by name or population
- View detailed country pages with flag, languages, currencies, borders
- Light / dark theme toggle via React Context and CSS variables
- Save favourite countries using useReducer + localStorage persistence
- Responsive design, keyboard-friendly controls, and accessibility attributes

## Tech Stack
- React 19
- Vite 4
- React Router v6
- CSS custom properties for theme support
- RestCountries API

## Getting Started
1. Clone the repository:
```bash
git clone https://github.com/revanthbalams143-cell/country-peek.git
cd country-peek/country-peek
```
2. Install dependencies:
```bash
npm install
```
3. Run locally:
```bash
npm run dev
```
4. Build production:
```bash
npm run build
```

## Deployment
This project can be deployed with GitHub Pages using the following commands:
```bash
npm install --save-dev gh-pages
npm run build
npm run deploy
```

## Notes
- Direct route URL access (e.g. `/country/BRA`) may require SPA redirect setup on GitHub Pages.
- Ensure the `/country-peek/` base is correctly configured in `vite.config.js` when deploying.

