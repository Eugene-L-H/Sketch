const playArea = document.querySelector('#play-area');
const clearButton = document.querySelector('#clear');

let height = 45;
let width = height * 1.5;
let num = height * width;

// Get pixel height and width.
let pixelSize = 500 / height;

playArea.classList.add('no-pointers');

document.addEventListener('mousedown', () => {
  playArea.classList.remove('no-pointers');
});

document.addEventListener('mouseup', () => {
  playArea.classList.add('no-pointers');
});

function populate(num, pixelSize) {
  // Populate the pixels.
  for (let i = 0; i < num; i++) {
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

populate(num, pixelSize);

// Clear play-area and repopulate with fresh pixels.
clearButton.addEventListener('click', () => {
  clearPlay();
  populate(num, pixelSize);
});
