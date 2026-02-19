"use strict";

class Mosaic {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.size = 150;
    this.sizeSlider = document.getElementById("size");
    this.densitySlider = document.getElementById("density");
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.regenerate = document.getElementById("regenerate");
    this.export = document.getElementById("export");
    // --INIT--//
    this.init();
  }

  init() {
    this.draw();
    this.regenerateMosaic();
    this.exportMosaic();
    this.setMosaicSize();
    this.setMosaicDensity();
  }

  arrayShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const random = Math.floor(Math.random() * (i + 1));
      [array[i], array[random]] = [array[random], array[i]];
    }
    return array;
  }

  clearAndDraw() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.draw();
  }

  regenerateMosaic() {
    this.regenerate.addEventListener("click", () => {
      this.clearAndDraw();
    });
  }

  exportMosaic() {
    this.export.addEventListener("click", () => {
      const pngDataUrl = this.canvas.toDataURL();
      const aDownloadLink = document.createElement("a");
      aDownloadLink.download = "mosaic.png";
      aDownloadLink.href = pngDataUrl;
      aDownloadLink.click();
    });
  }

  setMosaicSize() {
    this.sizeSlider.addEventListener("input", () => {
      this.clearAndDraw();
    });
  }

  setMosaicDensity() {
    this.densitySlider.addEventListener("input", () => {
      // console.log(this.densitySlider.value);
      this.clearAndDraw();
    });
  }

  draw() {
    const columns = Math.floor(this.width / this.sizeSlider.value);
    const rows = Math.floor(this.height / this.sizeSlider.value);

    const initArray = [...Array(columns * rows).keys()];
    const shuffledArray = this.arrayShuffle(initArray);
    const n = Math.floor((initArray.length * this.densitySlider.value) / 100);
    const array = shuffledArray.slice(0, n);
    array.forEach((i) => {
      const col = i % columns;
      const row = Math.floor(i / columns);
      const x = col * this.sizeSlider.value;
      const y = row * this.sizeSlider.value;
      this.ctx.fillStyle = "black";
      this.ctx.fillRect(x, y, this.sizeSlider.value, this.sizeSlider.value);
    });
  }
}

new Mosaic();
