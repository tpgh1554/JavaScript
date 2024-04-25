let colorBtn = document.getElementById("colorButton");
const colors = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];
let colorInx = 0;

colorBtn.addEventListener("click", function() {
  document.body.style.backgroundColor = colors[colorInx];
  colorInx = (colorInx + 1) % colors.length;
});