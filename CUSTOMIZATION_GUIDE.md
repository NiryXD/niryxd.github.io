# Customization Guide

How to personalize `Our Team _ Healthy Families Research.html` for your own organization **without changing the page structure**.

---

## 1. Site Branding

| What | Line | Current Value | Change To |
|------|------|---------------|-----------|
| University logo link text | 378 | `The University of Tennessee, Knoxville` | Your university or organization name |
| Site title | 382 | `Healthy Families Research` | Your lab / team / org name |
| Site title link | 382 | `https://healthyfamiliesresearch.utk.edu/` | Your homepage URL |
| Favicon | 11–14 | UTK favicon paths | Your own favicon file path |

---

## 2. Navigation Menu (Lines 420–425)

Each menu item is a `<li>` with an `<a>` link. Update the `href` and link text:

| Menu Item | Current Label | Current URL |
|-----------|--------------|-------------|
| 1 | Home | `https://healthyfamiliesresearch-dev.utk.edu/` |
| 2 | Our Research | `.../research/` |
| 3 | Our Social Media | `.../social-media/` |
| 4 | Our Team | `.../employees/` |
| 5 | Get In Touch | `.../contact-us/` |
| 6 | EURēCA | `.../eureca/` |

Replace each label and URL with your own pages. You can also **remove** `<li>...</li>` items you don't need or **add** new ones by copying the pattern.

---

## 3. Page Title (Line 450)

```html
<h1 class="entry-title">Our Team</h1>
```

Change `Our Team` to your desired page heading (e.g., `Our Staff`, `Meet the Lab`, etc.).

---

## 4. Featured Person — Lab Director Section (Lines 464–482)

This is the wide two-column block at the top. Edit these elements:

| Element | Line | What to Change |
|---------|------|----------------|
| Photo | 466 | Replace `src` with your image path, e.g. `./Our Team _ Healthy Families Research_files/your-photo.jpg` |
| Name | 472 | `Patricia N. E. Roberson, PhD` → your person's name |
| Title | 476 | `Lab Director` → their role |
| Bio | 480 | Replace the paragraph text with their biography |

> **Tip:** You can safely delete the `srcset` attribute from any `<img>` tag — it references WordPress CDN URLs that don't work locally.

---

## 5. Team Member Cards (Lines 490 onward)

Each team member follows the same repeating block. For **each** person, update:

### a) Photo
Find the `<img>` tag inside the `<figure>` element and change `src` to your image:
```
./Our Team _ Healthy Families Research_files/your-member-photo.jpg
```

### b) Name & Role
Inside the `<a>` tag within `panel-title`, change the text after the SVG icon:
```
Holly Hawkins, Lab Manager  →  Your Person, Their Role
```

### c) Bio Text
Inside `<div class="panel-body">`, replace the `<p>` content with your person's biography.

---

## 6. Adding a New Team Member

Copy an existing member block and paste it into the same row or a new row. **You must update the collapse IDs to be unique.** For example, if the last member uses `custom-collapse-16`, your new member should use `custom-collapse-17`:

- `id="custom-collapse-17"`
- `data-parent="#custom-collapse-17"`
- `href="...#custom-collapse-17-17"`
- `aria-controls="#custom-collapse-17-17"`
- `id="custom-collapse-17-17"`

---

## 7. Removing a Team Member

Delete the entire `<div class="wp-block-column">...</div>` block for that person. Make sure you remove the **complete** block (from opening to closing tag) so the remaining columns still display correctly.

---

## 8. Replacing Images

1. Place your new image files in the `Our Team _ Healthy Families Research_files/` folder.
2. Update every `src="..."` attribute on the relevant `<img>` tag to point to your new filename.
3. Optionally delete the `srcset` and `sizes` attributes (they reference WordPress URLs that won't work offline).

---

## 9. Footer & Accessibility Links (Lines 372–374)

Update or remove the skip-to-content and accessibility links if they reference external UTK URLs.

---

## Do NOT Delete These Files

The following files in the `_files` folder are required for styling and interactivity:

| File | Purpose |
|------|---------|
| `v2019.css` | Main site stylesheet |
| `style.min.css` | WordPress block styles |
| `styles__ltr.css` | Additional layout styles |
| `v2019.js.download` | Accordion collapse/expand behavior |
| `jquery-1.11.2.min.js.download` | jQuery (required by the accordion) |
| `frontend.min.js.download` | Additional frontend scripts |

You **can** safely delete any `.jpeg` / `.jpg` / `.webp` / `.png` images that you've replaced with your own.
