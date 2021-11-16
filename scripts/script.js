const playArea = document.querySelector('#play-area');
const lowRes = document.querySelector('#low');
const medRes = document.querySelector('#medium');
const highRes = document.querySelector('#high');
const clearButton = document.querySelector('#clear');

// Determines the resolution after the CLEAR button is pressed.
let currentResolution = 32;

// User must press and hold left mouse button to draw.
playArea.classList.add('no-pointers');

document.addEventListener('mousedown', () => {
  playArea.classList.remove('no-pointers');
});

document.addEventListener('mouseup', () => {
  playArea.classList.add('no-pointers');
});

playArea.addEventListener('mouseover mousedown', () => {
  return false;
});

// Clear play-area and repopulate with fresh pixels.
clearButton.addEventListener('click', () => {
  clearPlay();
  changeRes(currentResolution);
});

// Clear play-area and change resolutions.
lowRes.addEventListener('click', () => {
  buttonSelect(lowRes, medRes, highRes);
  currentResolution = 16;
  changeRes(16);
});

medRes.addEventListener('click', () => {
  buttonSelect(medRes, lowRes, highRes);
  currentResolution = 32;
  changeRes(32);
});

highRes.addEventListener('click', () => {
  buttonSelect(highRes, medRes, lowRes);
  currentResolution = 64;
  changeRes(64);
});

// Populate starting pixels at medium resolution.
changeRes(currentResolution);
