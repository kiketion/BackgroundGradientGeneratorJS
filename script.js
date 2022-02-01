let css = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body = document.getElementById('gradient');
let random = document.getElementById('random');
let auto = document.getElementById('auto');
let stop = document.getElementById('stop');
let interval;

function setGradient() {
  console.log(body);
  body.style.background =
    'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
  css.textContent = body.style.background + ';';
}

function randomColor() {
  let letters = '0123456789ABCDEF';
  let newColor = '#';
  for (let i = 0; i < 6; i++) {
    newColor += letters[Math.floor(Math.random() * 16)];
  }
  return newColor;
}

function randomGradient() {
  color1.value = randomColor();
  color2.value = randomColor();
  setGradient();
}

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
random.addEventListener('click', randomGradient);

auto.addEventListener('click', function () {
  interval = setInterval(randomGradient, 4000);
});
stop.onclick = function () {
  clearInterval(interval);
};
