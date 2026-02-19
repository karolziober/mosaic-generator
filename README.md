# Mosaic Generator

Mosaic is a browser-based generator that creates 3000×3000px images from randomly distributed black squares on a white grid. Adjust square size and fill density with sliders, regenerate patterns instantly, and export the result as a full-resolution PNG — all in a single HTML file with no dependencies.

## Features

- Adjustable square size (10px–300px)
- Adjustable fill density (1%–100%)
- Randomised pattern generation using the Fisher-Yates shuffle algorithm
- Export as full-resolution 3000×3000px PNG
- No frameworks, no build tools — vanilla HTML, CSS, and JavaScript

## Usage

Open `index.html` in a browser. No setup or installation required.

## Tech Stack

- HTML5 Canvas
- Vanilla JavaScript (ES6+)
- CSS

## Architecture Notes

The canvas operates at full 3000×3000px resolution internally and is scaled down visually via CSS. This ensures exports are always full resolution regardless of screen size.

Cell selection uses Fisher-Yates shuffle on a flat array of grid indices, then slices the first N elements based on the density percentage. This guarantees exactly the requested fill density with no duplicate cells and uniform distribution.
