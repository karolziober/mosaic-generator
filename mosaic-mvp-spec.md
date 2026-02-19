# Mosaic Album Art Generator — MVP Requirements

## Goal

A single-page web app that generates a 3000×3000px album art cover made of randomly placed black squares on a white background, aligned to a grid with no overlapping. The user can adjust settings and download the result as a PNG.

---

## Tech Stack

- Single HTML file containing all markup, styles, and scripts
- Vanilla JavaScript, HTML, CSS only
- No frameworks, libraries, or build tools

---

## Layout

Two sections side by side (stacked vertically on small screens):

1. **Preview area** — displays the generated mosaic on a canvas element. The canvas internal resolution is 3000×3000 but should be visually scaled down to fit the screen (around 600px or responsive).
2. **Controls panel** — contains all sliders and action buttons.

---

## Controls

**Square Size slider**
- Range: 2px to 100px
- Default: 10px
- Step: 1
- Current value displayed next to the label

**Fill Density slider**
- Range: 1% to 100%
- Default: 25%
- Step: 1
- Current value displayed next to the label

**Regenerate button**
- Generates a new random pattern using the current slider settings

**Export PNG button**
- Downloads the full 3000×3000 canvas as a PNG file

---

## Mosaic Generation Logic

On every slider change or regenerate action:

1. Divide the 3000×3000 canvas into a grid based on the current square size (e.g. 10px squares = 300×300 grid = 90,000 cells)
2. Determine how many cells to fill based on the density percentage
3. Randomly select that many unique cells from the full grid (no duplicates, so no overlapping)
4. Clear the canvas to white
5. Draw a black square in each selected cell, positioned exactly on the grid

Use the Fisher-Yates shuffle algorithm to ensure uniform random selection without duplicates.

---

## Export Behavior

When the user clicks Export:

- Generate a PNG from the canvas at full 3000×3000 resolution
- Trigger a browser download with a descriptive filename

---

## Info Display (optional)

A small stats line below the preview showing:

- Output resolution
- Grid dimensions
- Number of filled cells out of total

---

## Styling Guidelines

- Minimal, clean UI — the mosaic is the focal point
- Subtle frame or shadow around the canvas preview
- Custom-styled range sliders
- Responsive preview that scales down on smaller screens

---

## Stretch Goals (post-MVP)

- Custom foreground and background color pickers
- Multiple color palettes
- Adjustable canvas dimensions
- Gap/spacing between grid squares
- Opacity control for the squares
- Seeded randomness to reproduce specific patterns
