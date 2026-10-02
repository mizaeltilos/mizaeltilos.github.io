# Mizael Tilos — Portfolio

Static portfolio site (plain HTML, CSS and JavaScript — no build step, no dependencies).

## Files

```
index.html          page content, layout, SEO and link-preview tags
styles.css          hover states and phone/tablet layouts
main.js             credits tabs/dropdown, photo carousels, mobile menu, copy-email button
images/             photos, posters and stills (WebP) + share-preview.jpg for link previews
404.html            branded "page not found" page
robots.txt          tells search engines they may index the site
sitemap.xml         helps Google find the page
favicon.ico, *.png  browser tab icon and phone home-screen icons
site.webmanifest    name and icons when saved to a phone home screen
```

## Publish on GitHub Pages

1. Create a new repository on GitHub (e.g. `mizael-portfolio`) and upload everything in this folder, keeping the `images/` folder as is.
2. In the repository go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*, choose the `main` branch and the `/ (root)` folder, then **Save**.
4. After a minute the site is live at `https://<your-username>.github.io/<repository-name>/`.

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

1. Once you know your site address, replace every `https://YOUR-DOMAIN.com` with it
   (for GitHub Pages: `https://<username>.github.io/<repository-name>`). It appears in
   `index.html` (7 places), `robots.txt` and `sitemap.xml`. Use your editor's search-and-replace across all files.
2. Publish the change.
3. Check it, and refresh the platforms' cached preview:
   - Facebook / Threads / Messenger: https://developers.facebook.com/tools/debug/ → paste your link → **Scrape Again**
   - LinkedIn: https://www.linkedin.com/post-inspector/
   - X: just paste the link into a new post draft to see the card

Apps cache previews for a while, so after changing the image or text, use the tools above to refresh them.

## SEO checklist after launch

1. Replace `https://YOUR-DOMAIN.com` everywhere (see above).
2. Set up Google Search Console (https://search.google.com/search-console), verify the site,
   and submit `https://mizaeltilos.github.io/sitemap.xml`.
3. Test the structured data at https://search.google.com/test/rich-results.
4. Add the site link to your Instagram, TikTok, YouTube, Facebook and Spotify artist bios, and to IMDb.

**404 page on GitHub Pages without a custom domain:** in `404.html`, change `href="/"` to
`href="/<repository-name>/"` so the button leads back to the portfolio.
