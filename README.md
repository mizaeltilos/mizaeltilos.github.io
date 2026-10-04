# Mizael Tilos — Portfolio

Static portfolio site (plain HTML, CSS and JavaScript — no build step, no dependencies).

## Files

```
index.html          page content, layout, link-preview tags and the noindex tag
styles.css          hover states and phone/tablet layouts
main.js             credits tabs/dropdown, photo carousels, mobile menu, copy-email button
images/             photos, posters and stills (WebP) + share-preview.jpg for link previews
404.html            branded "page not found" page
robots.txt          lets search engines read the noindex tag (do not block crawling)
favicon.ico, *.png  browser tab icon and phone home-screen icons
site.webmanifest    name and icons when saved to a phone home screen
```

## Publish on GitHub Pages

1. On the GitHub account **mizaeltilos**, create a new public repository named exactly **`mizaeltilos.github.io`** and upload everything in this folder (keep the `images/` folder as is).
2. In the repository go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*, choose the `main` branch and the `/ (root)` folder, then **Save**.
4. After a minute or two the site is live at **https://mizaeltilos.github.io/**.

To use a custom domain (e.g. `mizaeltilos.com`), add it under **Settings → Pages → Custom domain** and follow GitHub's DNS instructions.

## Editing

- **Text and links:** edit `index.html` (search for the words you want to change).
- **Full credits list:** the rows live in `index.html` inside `<tbody id="creditRows">` (newest first).
  Each row has `data-cat` set to `film`, `tv`, `ads`, `stage`, `mv` or `dir`. To add a credit, copy a row
  of the same category and change the text. The tab counts and the "of 42 credits" total update automatically.
- **Photos:** replace a file in `images/` with a new one of the same name, or add a new file and update the `src` in `index.html`.
- **Accent colour:** search for `#D9AE55` in all three files.

Fonts load from Google Fonts (Big Shoulders Display, DM Sans, IBM Plex Mono).

## Link previews (Facebook, Threads, Messenger, X)

When someone pastes your link into a social app, the preview card uses the tags at the top of `index.html`
and the image `images/share-preview.jpg` (1200 × 630).

1. The site address is set to `https://mizaeltilos.github.io`. If it changes (for example to a custom domain),
   search-and-replace it in `index.html`.
2. Publish the change.
3. Check it, and refresh the platforms' cached preview:
   - Facebook / Threads / Messenger: https://developers.facebook.com/tools/debug/ → paste your link → **Scrape Again**
   - LinkedIn: https://www.linkedin.com/post-inspector/
   - X: just paste the link into a new post draft to see the card

Apps cache previews for a while, so after changing the image or text, use the tools above to refresh them.

## Search engines

The site is set to **not appear in Google or other search engines** (`<meta name="robots" content="noindex, nofollow">`
in `index.html`). Link previews on Facebook, Threads, Messenger and X still work.
To allow search engines again later, delete that one line.
