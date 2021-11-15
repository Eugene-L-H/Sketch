const playArea = document.querySelector('#play-area');
const clearButton = document.querySelector('#clear');

playArea.classList.add('no-pointers');

document.addEventListener('mousedown', () => {
  playArea.classList.toggle('no-pointers');
});

document.addEventListener('mouseup', () => {
  playArea.classList.add('no-pointers');
});

function populate() {
  // Populate the pixels.
  for (let i = 0; i < 5828; i++) {
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');

    playArea.append(pixel);
  }
  // Add coloring functionality to new pixels.
  let pixels = document.querySelectorAll('.pixel');

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

populate();

// Clear play-area and repopulate with fresh pixels.
clearButton.addEventListener('click', () => {
  clearPlay();
  populate();
});
