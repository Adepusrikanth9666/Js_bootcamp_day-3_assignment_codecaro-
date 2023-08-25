// Genetate Random colors

function getRandomColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);

  return "rgb(" + x + "," + y + "," + z + ")";
}

function changeBackgroundColor() {
  return (document.body.style.backgroundColor = getRandomColor());
}

window.onclick = () => {
  changeBackgroundColor();
};
