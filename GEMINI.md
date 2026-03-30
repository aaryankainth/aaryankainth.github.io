# Gemini Project Context: aaryankainth.github.io

## Project Overview
Personal portfolio for Aaryan Kainth, Mechanical Designer and Maker. Hosted on GitHub Pages. Based on the "Augustine" template by StyleShout.

## Style Guide
- **Tone:** Professional, first-person, and approachable.
- **Emphasis:** Use `<span class="bold">` for key achievements and skills in descriptions.
- **Vocabulary:** Mechanical Engineering/Robotics centric (e.g., "rapid prototyping", "mechanism design", "physical modeling").
- **Structure:** Succinct, action-oriented descriptions of contributions.
- **Responsiveness:** All new pages MUST be mobile-friendly. Use `column lg-12` wrappers within `row` containers, responsive video containers, and avoid fixed widths.

## Current State & Roadmap
- [x] Fix broken link to `projects/capstone.html` (Created and content updated).
- [x] Replace template leftovers ("Augustine", "Styleshout" defaults) in footer and header across all pages. (Skipped `styles.html` per user request).
- [x] Update Copyright year to 2026.
- [x] Fix "Styles" link in branding to point to `index.html` instead of `../`.
- [x] Standardize page transitions across all project pages (Using `js/page-transitions.js`).
- [x] Resolve Photoswipe vs. HTML page link inconsistencies in `index.html` (Links now point directly to project pages).

## Next Steps
- [ ] **Maintenance:** Periodically check for broken links as more projects are added.
- [ ] **Content:** Add more high-quality images to the project pages.

## Decisions & Lessons Learned
- *2026-03-28:* Initialized `GEMINI.md` for context persistence.
- *2026-03-28:* Established **Anti-AI Style Guide**: Engineering-first language, focus on tools/outcomes, `<span class="bold">` for emphasis.
- *2026-03-30:* Completed batch updates for copyright 2026 and "Augustine" branding removal.
- *2026-03-30:* Created `projects/capstone.html` and implemented standardized fade transitions across all pages using `js/page-transitions.js` and global CSS.
- *2026-03-30:* Fixed project layout in `capstone.html` to support a 2-column image/description split.
- *2026-03-30:* Corrected list margins in `css/styles.css` and fixed row/column alignment issues in project pages for mobile responsiveness.
- *2026-03-30:* Resolved "blank screen" back-button issue using the `pageshow` event and prevented image flashing by setting initial CSS opacity to 0.
