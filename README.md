# Furniutr. — Landing Page Starter

A modular starter for the **Furniutr.** furniture landing page, built by a team of three frontend developers.

## Overview

The page consists of a shared **Header**, five sections and a shared **Footer**:

1. Hero — "Feel your home with a modern design space"
2. About — "About Furniture"
3. Features — "More value from this Furniture"
4. Products — "Our you have to buy Product"
5. Try Now — "Let's Try Now"

Who owns what, and the working rules, are in [TEAM_GUIDE.md](./TEAM_GUIDE.md).

**Status:** Header, Footer, Hero and About are implemented. Features, Products and Try Now are empty starters waiting for their developers.

## Technology stack

- HTML5
- CSS3 (custom properties, grid, flexbox)
- Vanilla JavaScript (ES6+)
- Native ES Modules (`import` / `export`)

No frameworks, no build step, no dependencies. The only external resource is the Montserrat font from Google Fonts (falls back to a system font offline).

## Folder structure

```
landing-page/
├── index.html                    # page shell, links all CSS, loads app.js
├── assets/
│   └── images/                   # put photos here
├── docs/
│   └── task-distribution/        # 3 images: who builds which section (not used by the site)
├── src/
│   ├── app.js                    # imports everything, renders the page
│   ├── components/
│   │   ├── header/               # header.js + header.css
│   │   └── footer/               # footer.js + footer.css
│   ├── sections/
│   │   ├── hero/                 # hero.js + hero.css
│   │   ├── about/                # about.js + about.css
│   │   ├── features/             # features.js + features.css
│   │   ├── products/             # products.js + products.css
│   │   └── try-now/              # try-now.js + try-now.css
│   ├── styles/
│   │   └── global.css            # variables, reset, shared helpers
│   └── utils/
│       └── dom.js                # shared DOM helper functions
├── TEAM_GUIDE.md
├── README.md
└── .gitignore
```

## How to run

ES modules need a web server (opening `index.html` by double-click will not work).

**VS Code:** install *Live Server* → right-click `index.html` → *Open with Live Server*.

**Or from a terminal:**

```bash
npx serve .
# or
python -m http.server 5500
```

## How the module system works

- Each section lives in its own folder and exports one function with a **named export**, e.g. `export function HeroSection()`, which builds and returns a real DOM element using the native DOM API (`createElement`, `classList`, `textContent`, `append`).
- `src/app.js` imports every section (and the Header / Footer), keeps them in an array in Figma order, appends the returned elements to a `<main>` element and mounts Header, main and Footer into `<div id="app">` in `index.html`. No HTML strings or `innerHTML` are used.
- `src/utils/dom.js` holds small shared helpers that wrap the native DOM methods.
- After rendering, `app.js` dispatches a `page:rendered` event. Modules that need JavaScript behaviour (such as the header menu) listen for it, so developers never need to edit `app.js`.
- CSS is plain files linked from `index.html`. Class names are prefixed per section (`.hero__*`, `.about__*`, `.features__*`, `.products__*`, `.trynow__*`) so styles cannot collide.
