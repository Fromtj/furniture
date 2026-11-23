# TEAM GUIDE — Furniutr. Landing Page

Read this once before you write any code. It tells you what you own, what you must not touch, and how we avoid stepping on each other.

---

## 1. Who is responsible for what

**Kibriyo is the Team Lead** and is responsible for the project architecture and the final integration of the page.

| Page order | Section (name from Figma)                 | Folder                      | Developer            |
| ---------- | ----------------------------------------- | --------------------------- | -------------------- |
| —          | Header (shared)                           | `src/components/header/`    | Kibriyo (Team Lead)  |
| 1          | **Hero** — "Feel your home with a modern design space" | `src/sections/hero/`     | **Kibriyo**          |
| 2          | **About** — "About Furniture"             | `src/sections/about/`       | **Kibriyo**          |
| 3          | **Features** — "More value from this Furniture" | `src/sections/features/` | **Amirhon**         |
| 4          | **Products** — "Our you have to buy Product" | `src/sections/products/` | **Amirhon**          |
| 5          | **Try Now** — "Let's Try Now"             | `src/sections/try-now/`     | **Tolibov**          |
| —          | Footer (shared)                           | `src/components/footer/`    | Kibriyo (Team Lead)  |

Folders are named after the **sections**, not the people. Who owns a section is documented only here.

---

## 2. Which files you are allowed to modify

| Developer | May edit (only these)                                                                                     |
| --------- | --------------------------------------------------------------------------------------------------------- |
| Kibriyo   | `src/sections/hero/*`, `src/sections/about/*` + all Team-Lead files (section 9)                           |
| Amirhon   | `src/sections/features/*`, `src/sections/products/*`                                                      |
| Tolibov   | `src/sections/try-now/*`                                                                                  |

Everyone may add image files to `assets/images/` — use a unique file name that starts with your section (`features-sofa.jpg`, `try-now-room.jpg`).

If you think you need to change a file you don't own, **ask the owner / Team Lead** instead of editing it.

---

## 3. How to implement your section

1. Open your section's two files, e.g. `src/sections/features/features.js` and `features.css`.
2. Build the markup inside the exported function (it returns a template literal).
3. Style it in the CSS file next to it using **your class prefix** (e.g. `.features__card`).
4. Replace the grey `u-media` placeholder with a real `<img>` once the asset is in `assets/images/`.
5. Refresh the page (Live Server) and compare with Figma.

**Current status:** Hero and About (Kibriyo) are implemented. Features, Products and Try Now are clean starters: each exports an empty `<section>` with its id and class, and its CSS file is empty. Build them from scratch following the Figma design. Do not add content that is not in the design.

---

## 4. How to export a section

Every section file uses a **named export** of one function that returns an HTML string:

```js
export function FeaturesSection() {
  return `
    <section class="features" id="features">
      <div class="features__inner container"></div>
    </section>
  `;
}
```

Rules:

- Keep the **exported function name** and the **file path** unchanged — `app.js` imports them.
- Use named exports only (no `export default`).
- Need more than one block in your section? Create small helper functions inside your file — do not export extra things that `app.js` doesn't use.
- Keep the `id` and the outer class of the starter `<section>` (e.g. `id="features"`, `class="features"`): the header, footer and buttons link to those ids.
- Need JavaScript behaviour (click handlers, sliders)? See "page:rendered" in section 6.

---

## 5. How CSS is organised

| File                                  | Contains                                              | Owner      |
| ------------------------------------- | ----------------------------------------------------- | ---------- |
| `src/styles/global.css`               | variables (colors, fonts), reset, `.container`, `.btn`, `.u-outline`, `.u-media`, `.u-sr-only` | Team Lead |
| `src/components/header/header.css`    | `.site-header*`                                       | Team Lead  |
| `src/components/footer/footer.css`    | `.site-footer*`                                       | Team Lead  |
| `src/sections/<name>/<name>.css`      | one section only                                      | section owner |

**Naming rule (BEM with the section name as prefix):**

| Section  | Prefix      | Example                  |
| -------- | ----------- | ------------------------ |
| Hero     | `.hero`     | `.hero__title`           |
| About    | `.about`    | `.about__media`          |
| Features | `.features` | `.features__card--two`   |
| Products | `.products` | `.products__price`       |
| Try Now  | `.trynow`   | `.trynow__button`        |

Do:

- Start **every** selector in your CSS file with your prefix.
- Use the variables from `global.css`: `var(--color-primary)`, `var(--font-main)` …
- Reuse shared helpers: `.container`, `.btn`, `.u-outline`.

Don't:

- Style bare elements (`h2 {}`, `p {}`, `img {}`, `a {}`, `body {}`) in a section file.
- Use IDs for styling, or `!important` to win fights with other files.
- Redefine `.btn` or `.container` — if the shared version is wrong, ask the Team Lead.

---

## 6. How `app.js` imports and renders everything

`src/app.js` imports `Header`, `Footer` and the five section functions from their fixed paths, puts the sections in an array **in Figma order**, joins their HTML into `<main>`, and writes it into `<div id="app">`:

```
Header → HeroSection → AboutSection → FeaturesSection → ProductsSection → TryNowSection → Footer
```

You never edit `app.js` — it already imports your function. Whatever your function returns appears on the page.

**Adding JavaScript behaviour without touching `app.js`:** after rendering, `app.js` fires a `page:rendered` event. Subscribe to it in your own file:

```js
function initMySection() {
  const btn = document.querySelector('[data-my-button]');
  if (!btn) return;
  btn.addEventListener('click', () => {
    btn.classList.toggle('is-active');
  });
}

document.addEventListener('page:rendered', initMySection);
```

Do **not** use `document.querySelector` at the top level of your module — the HTML doesn't exist yet at that moment.

**CSS loading:** each stylesheet is linked in `index.html`. Your CSS file is already linked. If you ever need an additional CSS file, ask the Team Lead to add the `<link>`.

---

## 7. How to test locally

Native ES modules do not work from `file://`, so use a local server:

1. Install the **Live Server** extension in VS Code.
2. Open the `landing-page` folder in VS Code.
3. Right-click `index.html` → **Open with Live Server**.

Alternatives (any one):

```bash
npx serve .
python -m http.server 5500     # then open http://localhost:5500
```

Checklist before every push:

- [ ] Page loads with no errors in the browser console (F12).
- [ ] Your section appears in the right place, with the right text.
- [ ] Layout checked at desktop (≥1200px), tablet (~768px) and phone (~375px).
- [ ] You only changed files in your own folder.

---

## 8. Git workflow — avoiding merge conflicts

The structure is built so two people never edit the same file. Keep it that way:

1. **One branch per developer/section**: `feature/hero`, `feature/about`, `feature/features`, `feature/products`, `feature/try-now`.
2. Start from fresh `main`: `git checkout main && git pull`, then `git checkout -b feature/<section>`.
3. **Commit small and often**, with clear messages: `features: add card styles`.
4. Before pushing: `git pull origin main --rebase` to pick up others' work.
5. Open a Pull Request to `main`. **Team Lead reviews and merges.**
6. Never commit directly to `main`. Never force-push shared branches.
7. Don't reformat or rename files you don't own (no "format all" on the whole project).
8. If a conflict still appears, don't guess — message the Team Lead.

---

## 9. Files that must NOT be modified without Team Lead approval

| File / folder                  | Why                                              |
| ------------------------------ | ------------------------------------------------ |
| `index.html`                   | page shell + CSS `<link>` list                   |
| `src/app.js`                   | imports and page order                           |
| `src/styles/global.css`        | design tokens, reset, shared helpers             |
| `src/components/header/*`      | shared Header                                    |
| `src/components/footer/*`      | shared Footer                                    |
| `TEAM_GUIDE.md`, `README.md`, `.gitignore` | project rules and docs               |
| Another developer's section folder | owned by someone else                        |

Need a change in one of these? Message **Kibriyo (Team Lead)** with what and why.

---

## Notes about the starter

- All text comes from the Figma design **verbatim**, including its wording ("Our you have to buy", "Get's your discount", "Estimats"). Fix copy only after the team agrees.
- Photos are not included, so every picture slot in Hero and About is a grey `u-media` box. Drop images into `assets/images/` and swap the box for an `<img>`.
- The project contains no code comments by team convention. Keep it that way.
- The header/footer links point to the page's sections (`#hero`, `#about`, `#features`, `#products`); change them if the design calls for something else.
