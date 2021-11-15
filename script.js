const playArea = document.querySelector('#play-area');

for (let i = 0; i < 5828; i++) {
  let pixel = document.createElement('div');
  pixel.classList.add('pixel');

  playArea.append(pixel);
}

let pixels = document.querySelectorAll('.pixel');

pixels.forEach((pixel) => {
  pixel.addEventListener('mouseover', () => {
    pixel.classList.add('filled');
  });
});
