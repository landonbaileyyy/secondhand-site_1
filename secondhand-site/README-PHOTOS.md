# Adding Photos to the Website

This guide explains where to put new photos so they show up correctly on the website. No technical skills needed — just drag and drop files into the right folder.

## Where photos live

All photos are inside the `images` folder, sorted into 4 folders — one per category:

```
images/
├── women/     ← Women's clothing photos
├── men/       ← Men's clothing photos
├── boys/      ← Boys' clothing photos
├── girls/     ← Girls' clothing photos
└── storefront.webp   (the outside-of-the-store photo — leave this one alone)
```

To add a new photo, just drop the image file into the matching folder. For example, a new photo of women's clothing goes into the `women` folder.

## What to name your photos

Keep names simple, lowercase, and numbered so they're easy to tell apart:

- `women-01.jpg`, `women-02.jpg`, `women-03.jpg`, ...
- `men-01.jpg`, `men-02.jpg`, `men-03.jpg`, ...
- `boys-01.jpg`, `boys-02.jpg`, `boys-03.jpg`, ...
- `girls-01.jpg`, `girls-02.jpg`, `girls-03.jpg`, ...

No spaces in the file name — use a dash instead (`women-02.jpg`, not `women 02.jpg`).

## Photo tips (size and format)

- **Format:** `.jpg` is best for clothing photos. (`.webp` also works fine if that's what your phone/camera saves.)
- **Size:** Aim for photos around **1200–2000 pixels** on the longest side. That's plenty sharp for the web without being a huge file. Most modern phone cameras take photos this size or larger by default — no need to change your camera settings.
- **File size:** Try to keep each photo under **1–2 MB**. If a photo is much larger than that, most phones and computers have a "resize" or "compress" option when you export/share the photo — or you can ask whoever updates the site to shrink it for you.
- **Orientation:** Take photos in good, even lighting, and keep the clothing item centered and in focus. Vertical (portrait) photos tend to look best for most of the photo tiles on this site.

## After you drop in a new photo

Adding the photo file to the folder isn't quite enough by itself — someone still needs to update the web page to point at the new file name (a quick, one-line change per photo). If you're doing this yourself with help from a developer or Claude Code, just say something like:

> "I added a new photo `women-04.jpg` to the women's folder — please add it to the home page and gallery."

and it can be wired in for you.
