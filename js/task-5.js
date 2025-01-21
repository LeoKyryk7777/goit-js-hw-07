const changeColor = document.querySelector(`.change-color`)
const span = document.querySelector(`.color`)
const body = document.querySelector(`body`)
const click = changeColor.addEventListener("click",handleClick)
function handleClick() {
  const randomColor = getRandomHexColor()
  span.textContent = randomColor;
  body.style.backgroundColor = randomColor;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
