# Mizael Tilos — Portfolio

Static portfolio site (plain HTML, CSS and JavaScript — no build step, no dependencies).

## Files

```
index.html   page content and layout
styles.css   hover states and phone/tablet layouts
main.js      credits tabs/dropdown, photo carousels, mobile menu, copy-email button
images/      all photos, posters and stills
```

## Publish on GitHub Pages

1. Create a new repository on GitHub (e.g. `mizael-portfolio`) and upload everything in this folder, keeping the `images/` folder as is.
2. In the repository go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*, choose the `main` branch and the `/ (root)` folder, then **Save**.
4. After a minute the site is live at `https://<your-username>.github.io/<repository-name>/`.

To use a custom domain (e.g. `mizaeltilos.com`), add it under **Settings → Pages → Custom domain** and follow GitHub's DNS instructions.

## Editing

- **Text and links:** edit `index.html` (search for the words you want to change).
- **Full credits list:** edit the `DATA` object at the top of `main.js`. Each row is
  `["Title", "Role", "Production", "Director", "Date"]`, listed oldest first (the page shows newest first).
- **Photos:** replace a file in `images/` with a new one of the same name, or add a new file and update the `src` in `index.html`.
- **Accent colour:** search for `#D9AE55` in all three files.

Fonts load from Google Fonts (Big Shoulders Display, DM Sans, IBM Plex Mono).
