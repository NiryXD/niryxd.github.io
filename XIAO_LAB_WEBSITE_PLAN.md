# Dr. Xiao's Lab Website — UTK Transition Plan & Guide

> **Context**: Dr. Xiao is establishing her research lab at the University of Tennessee, Knoxville (UTK). She is Dr. Xiao's first cohort of lab members. The lab website should follow **UTK branding and styling**, modeled after the [Healthy Families Research](https://healthyfamiliesresearch.utk.edu/employees/) site template already saved in the `UTKWebsite/` folder, and inspired by the [PUGA STAR LAB](https://sites.uab.edu/pugastarlab/) site structure saved in `BamaWebsite/`.

---

## 1. What Dr. Xiao Requested

Dr. Xiao outlined two tracks of work:

### 📸 Pictures
| Item | Details | Status |
|------|---------|--------|
| **Group photo** | Plan a spring group photo (inspired by PUGA STAR LAB landing page) | ⏳ Schedule during Spring 2026 |
| **Individual profile photos** | Gather headshots + fun pictures from each lab member | ⏳ Ask at first lab meeting |

### ✍️ Text
| Item | Details | Status |
|------|---------|--------|
| **Lab mission statement** | Dr. Xiao will draft this | ⏳ Waiting on Dr. Xiao |
| **Member role descriptions** | Each member writes a short bio for under their photo | ⏳ Collect at first lab meeting |

---

## 2. Site Architecture — Proposed Pages

Based on the PUGA STAR LAB reference and UTK conventions:

| Page | Purpose | Reference |
|------|---------|-----------|
| **Home** | Group photo, lab mission statement, research focus summary | [PUGA STAR LAB home](https://sites.uab.edu/pugastarlab/) |
| **Our Team** | PI section (Dr. Xiao) + member cards with photos/bios | [PUGA STAR LAB team](https://sites.uab.edu/pugastarlab/our-team/) |
| **Research** | Overview of lab research areas | Future page |
| **Contact** | Lab contact info, location at UTK | Future page |

> [!TIP]
> Start with **Home** and **Our Team** — these are the pages Dr. Xiao's email focuses on. Research and Contact can be added later.

---

## 3. UTK Styling Guide — What You Need to Know

The website **must** follow UTK's official WordPress theme (`ut-thehill`). Here's a breakdown of the key elements from the saved `UTKWebsite/` template:

### 3.1 Header & Branding

```
┌──────────────────────────────────────────────────┐
│  [UTK Logo]  The University of Tennessee, Knoxville  │
│  [Lab Name]  ← site-title                           │
│  [☰ Menu]                                            │
└──────────────────────────────────────────────────┘
```

| Element | UTK Value | Your Value |
|---------|-----------|------------|
| University title | `The University of Tennessee, Knoxville` | Keep as-is |
| Site title | `Healthy Families Research` | → **Dr. Xiao's Lab Name** (TBD from Dr. Xiao) |
| Site URL | `healthyfamiliesresearch.utk.edu` | → Your assigned UTK URL |
| Favicon | UTK default favicons | Keep UTK defaults |

### 3.2 Navigation Menu

The UTK template uses a **slide-out sidebar menu**. Update menu items to match your pages:

```
Home
Our Team
Research
Contact
```

### 3.3 Color Palette — UTK Official

| Color | Hex | Usage |
|-------|-----|-------|
| UT Orange | `#FF8200` | Primary accent, links, headers |
| Smokey Gray | `#58595B` | Body text, secondary elements |
| White | `#FFFFFF` | Backgrounds |
| Dark Gray / Black | `#333333` | Footer, heavy text |

> [!IMPORTANT]
> Do **not** use UAB's green/teal colors from the PUGA STAR LAB site. Everything must be UTK-branded.

### 3.4 Typography

The UTK theme uses system/WordPress fonts. Do not import custom fonts — the `v2019.css` stylesheet handles all typography.

### 3.5 Team Page Layout

The UTK template (`Our Team _ Healthy Families Research.html`) uses **two layout patterns**:

#### Pattern A — Featured PI Section (Dr. Xiao)
A two-column layout at the top with a large photo + full bio:

```
┌─────────────────────────────────────────┐
│  [Photo]  │  Dr. Chunhong Xiao, PhD     │
│  (33%)    │  Principal Investigator      │
│           │                              │
│           │  [Full biography paragraph]  │
│           │  (66%)                       │
└─────────────────────────────────────────┘
```

#### Pattern B — Member Cards (Each Lab Member)
A 3-column grid with photo + expandable accordion:

```
┌──────────┐  ┌──────────┐  ┌──────────┐
│  [Photo] │  │  [Photo] │  │  [Photo] │
│          │  │          │  │          │
│ ▾ Name,  │  │ ▾ Name,  │  │ ▾ Name,  │
│   Role   │  │   Role   │  │   Role   │
│ ┄┄┄┄┄┄┄┄ │  │ ┄┄┄┄┄┄┄┄ │  │ ┄┄┄┄┄┄┄┄ │
│ [Bio     │  │ [Bio     │  │ [Bio     │
│  shows   │  │  hidden] │  │  hidden] │
│  on      │  │          │  │          │
│  click]  │  │          │  │          │
└──────────┘  └──────────┘  └──────────┘
```

> [!NOTE]
> The accordion collapse/expand behavior uses jQuery + the `v2019.js.download` script. Each member needs unique collapse IDs (e.g., `custom-collapse-0`, `custom-collapse-1`, etc.). See `CUSTOMIZATION_GUIDE.md` Section 6 for details.

---

## 4. Action Plan — Step by Step

### Phase 1: Content Collection (NOW → First Lab Meeting)

| # | Task | Owner | Deadline |
|---|------|-------|----------|
| 1 | Dr. Xiao drafts lab mission statement | Dr. Xiao | Before first lab meeting |
| 2 | Each member prepares a short bio (3–5 sentences) | All members | First lab meeting |
| 3 | Each member submits an individual profile photo (headshot) | All members | First lab meeting |
| 4 | Each member optionally submits a fun/candid photo | All members | First lab meeting |
| 5 | Schedule spring group photo date | Dr. Xiao + team | At first lab meeting |

#### Bio Template for Members

Each member should write a short paragraph covering:
```
[Name] is a [year/position] at the University of Tennessee, Knoxville,
[majoring/working in ___]. [Their role in Dr. Xiao's lab].
[Research interests or background]. [Fun fact or hobby].
```

**Example** (based on PUGA STAR LAB format):
> "Jane Doe is a junior at the University of Tennessee, majoring in Nursing
> with a minor in Psychology. She assists with data collection and participant
> recruitment in Dr. Xiao's lab. Her research interests include AI applications
> in behavioral symptom science among persons living with dementia. In her free
> time, she enjoys hiking in the Smokies."

#### Photo Requirements
- **File format**: JPEG or PNG
- **Minimum size**: 600 × 600 pixels (square or portrait orientation preferred)
- **Background**: Neutral/professional preferred, but casual/fun photos welcome
- **Naming convention**: `firstname-lastname.jpg` (lowercase, hyphenated)

### Phase 2: Homepage Build

| # | Task | Details |
|---|------|---------|
| 1 | Add group photo | Center-aligned, full-width, after the mission statement |
| 2 | Add lab mission statement | Use `<h4>` centered text for the tagline + `<p>` for the full mission |
| 3 | Update site branding | Lab name in header, update URLs |
| 4 | Update navigation menu | Home, Our Team, Research, Contact |

### Phase 3: Our Team Page Build

| # | Task | Details |
|---|------|---------|
| 1 | Create featured PI section | Dr. Xiao's photo + full bio in the 2-column layout (Pattern A) |
| 2 | Add member cards | One card per member using the accordion layout (Pattern B) |
| 3 | Place photos in `_files` folder | Move all member photos to the assets folder |
| 4 | Assign unique collapse IDs | `custom-collapse-0` through `custom-collapse-N` |
| 5 | Test all accordions | Verify each click expands/collapses correctly |

### Phase 4: Group Photo Update (Spring 2026)

| # | Task | Details |
|---|------|---------|
| 1 | Take group photo | Professional or semi-professional setting at UTK campus |
| 2 | Replace placeholder on homepage | Swap in the final group photo |
| 3 | Optionally add to Our Team page | Consider a group banner at the top of Our Team |

---

## 5. Quick Reference — Key Files

| File/Folder | Purpose |
|-------------|---------|
| [UTK Team Template](file:///c:/UTK/WebPageXiao/UTKWebsite/Our%20Team%20_%20Healthy%20Families%20Research.html) | The UTK-styled template to customize (your starting point) |
| [UTK Template Assets](file:///c:/UTK/WebPageXiao/UTKWebsite/Our%20Team%20_%20Healthy%20Families%20Research_files/) | CSS, JS, and image assets for the UTK template |
| [CUSTOMIZATION_GUIDE.md](file:///c:/UTK/WebPageXiao/CUSTOMIZATION_GUIDE.md) | Step-by-step instructions for editing the UTK template |
| [PUGA STAR LAB Home](file:///c:/UTK/WebPageXiao/BamaWebsite/PUGA%20STAR%20LAB%20%E2%80%93%20School%20of%20Nursing.html) | Reference for homepage layout (mission + group photo) |
| [PUGA STAR LAB Team](file:///c:/UTK/WebPageXiao/BamaWebsite/Our%20Team%20%E2%80%93%20PUGA%20STAR%20LAB.html) | Reference for team page layout (PI + member bios) |

---

## 6. Differences: UAB (PUGA STAR LAB) vs. UTK (Our Template)

Understanding these differences helps you avoid accidentally mixing styles:

| Feature | PUGA STAR LAB (UAB) | Dr. Xiao's Site (UTK) |
|---------|--------------------|-----------------------|
| **Theme** | Maisha Lite (UAB child theme) | ut-thehill (UTK WordPress theme) |
| **Header** | Site title + subtitle text | UTK killer-logo + site title |
| **Navigation** | Horizontal nav bar | Slide-out sidebar menu |
| **Team Layout** | Alternating left/right media-text blocks | 2-column PI hero + 3-column accordion grid |
| **Member Bios** | Always visible inline | Hidden behind accordion click |
| **Footer** | UAB branding + equal opportunity text | UTK branding |
| **Colors** | UAB green/teal | UT Orange `#FF8200` + Smokey Gray |

> [!CAUTION]
> The PUGA STAR LAB site is a **content and structure reference only**. Do NOT copy its CSS, footer, or branding elements. Always use the UTK template files.

---

## 7. Checklist for First Lab Meeting

Print or share this with the team:

- [ ] Introduce the website project to all lab members
- [ ] Show the PUGA STAR LAB site as a reference for what we're building
- [ ] Collect (or set a deadline for) individual profile photos
- [ ] Collect (or set a deadline for) short bios from each member
- [ ] Decide on spring group photo date/location
- [ ] Confirm the lab name with Dr. Xiao for the website header
- [ ] Ask Dr. Xiao for the lab mission statement timeline

---

## 8. What You (the Web Team) Should Do Next

1. **Wait for Dr. Xiao's lab mission draft** — this is the homepage centerpiece
2. **Collect bios and photos at the first meeting** — use the template in Section 4
3. **Start customizing the UTK template** — follow `CUSTOMIZATION_GUIDE.md` to:
   - Update the site title and navigation
   - Replace the PI section with Dr. Xiao's info
   - Add member cards as you receive bios/photos
4. **Use a placeholder group photo** until the spring photo is taken
5. **Test locally** by opening the HTML file in a browser before publishing

> [!TIP]
> You can build the site incrementally. Start with Dr. Xiao's PI section and add members one at a time as their bios/photos come in. The accordion layout makes it easy to add new members — just copy a card block and update the IDs, name, role, bio, and photo. See `CUSTOMIZATION_GUIDE.md` Section 6.
