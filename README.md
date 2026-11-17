# Madhavi Loya — Portfolio

A responsive personal portfolio built with React, Vite, and plain CSS.

## Run locally

1. Install [Node.js](https://nodejs.org/).
2. Open this folder in a terminal.
3. Install the project packages:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local address printed in the terminal.

To check the production build and code style, run `npm run build` and `npm run lint`.

## Personalize before publishing

Update `src/data/portfolio.js` with your real email, LinkedIn and GitHub profile URLs, project links, and any project details you want to change. The example links are placeholders and must be replaced before publishing. The contact form uses your email app to prepare a message; it does not send or store form submissions on a server.

The education section currently contains the degree only. Add your college and graduation year when you are ready.

The **Download resume** button opens the browser's print dialog. Choose **Save as PDF** to download a copy. Update the contact and education details before sharing it.

## Project structure

- `src/components/` — individual page sections and the shared icon component.
- `src/data/portfolio.js` — profile, skills, and project content.
- `src/App.jsx` — page layout and light/dark theme state.
- `src/App.css` — component styles, responsive layouts, and print styles.
- `src/index.css` — global styles and reduced-motion support.
- `index.html` — document title, description, and React mount point.
