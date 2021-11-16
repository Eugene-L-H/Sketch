function populate(pixelDensity, pixelSize) {
  // Populate the pixels.
  for (let i = 0; i < pixelDensity; i++) {
    let pixel = document.createElement('div');
    // pixel.classList.add('pixel');
    pixel.setAttribute(
      'style',
      `width: ${pixelSize}px; height: ${pixelSize}px;`
    );

    playArea.append(pixel);
  }
  // Add coloring functionality to new pixels.
  // let pixels = document.querySelectorAll('.pixel');
  let pixels = playArea.querySelectorAll(':scope > div');

  pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', () => {
      pixel.classList.add('filled');
    });
  });
}

function clearPlay() {
  // Remove all pixels from play-area.
  playArea.innerHTML = '';
}

function changeRes(resolution) {
  let height = resolution;
  let width = height * 1.5;
  let pixelDensity = height * width;

  // Get pixel height and width.
  let pixelSize = 500 / height;

  clearPlay();
  populate(pixelDensity, pixelSize);
}

function buttonSelect(on, off1, off2) {
  on.classList.add('selected');
  off1.classList.remove('selected');
  off2.classList.remove('selected');
}
