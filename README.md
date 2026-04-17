# Universe of Heroes (Titan Forge)

A React single-page app for the **Universe of Heroes** / **Titan Forge** brand: home, comics, characters, gallery, merch, and related content. Routing is handled with **React Router**.

## Tech stack

- **React** 19, **Vite** 8, **react-router-dom** 7
- Styling: `App.css` and component-scoped class names

## Scripts

| Command        | Description                    |
|----------------|--------------------------------|
| `npm run dev`  | Start dev server (Vite)        |
| `npm run build`| Production build to `dist/`    |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint                     |

## Project layout

- **`src/App.jsx`** — Top-level routes, site header, navigation
- **`src/components/`** — Page components (`Home`, `Comics`, `characters`, `Gallery`, `Merch`, etc.) and **`character/`** for individual hero pages
- **`src/data/`** — JSON for characters (`charactersPage.json`, `characterHeroImages.json`, `characterGalleries/`), gallery (`mainGallery.json`), merch (`merchItems.json`), comics series data, and related config
- **`src/assets/`** — Images, comics PDFs, page title art (`PageTitles/`), character art (`imagesCharacters/`, `imagePose/`), and other static files
- **`src/utils/`** — Helpers such as `characterHeroImage.js` for resolving hero banner images

## Adding or updating characters

1. List the character in **`src/data/charactersPage.json`** (`name`, `path`, optional `imageFile` under `imagesCharacters/`).
2. Set the hero image in **`src/data/characterHeroImages.json`** (`imagePose`, `portraitImage`, or `placeholder`).
3. Add a route in **`src/App.jsx`** and a component under **`src/components/character/`** if it does not exist yet.

## License / rights

Character and comic content are property of their respective owners (see in-app copyright notice).
