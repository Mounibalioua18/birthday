let cakeDrawn = false;
let p5Instance;

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent(document.getElementById('startButton').parentNode); // Attach to body via button's parent
  canvas.style('display', 'none'); // Hidden until button click
  background('#FFFDD0');
  console.log("Setup complete");
}

function draw() {
  if (!cakeDrawn) return;

  console.log("Drawing cake");
  canvas.style('display', 'block');
  document.getElementById('startButton').style.display = 'none';

  // Draw cake layers
  drawLayer(-220, 405, 400, 10, '#FFC0CB', '#000000'); // Base
  drawLayer(-135, 375, 240, 30, '#A020F0', '#000000'); // Purple
  drawLayer(-135, 355, 240, 20, '#55FF55', '#000000'); // Green
  drawLayer(-135, 295, 240, 60, '#B87333', '#000000'); // Brown

  // Toppings
  drawTopping(-120, 235, '#C20067');
  drawTopping(-80, 235, '#FFFF00');
  drawTopping(25, 235, '#FF0000');
  drawTopping(59, 235, '#0000FF');

  // Candle
  drawCandle(-40, 235, '#FFF44F', '#000000');
  drawStick(-26, 310, '#181A18', 7);

  // Stick and circle
  drawLongStick(0, 235, '#181A18');
  drawCircle(100, 460, 100, '#181A18', '#FFFDD0');

  // Text
  textAlign(CENTER);
  textSize(20);
  fill('#000000');
  text('JOYEUX', 300, 480);
  textSize(17);
  text('ANNIVERSAIRE', 300, 510);

  noLoop();
}

function drawLayer(x, y, w, h, fillColor, strokeColor) {
  stroke(strokeColor);
  strokeWeight(3);
  fill(fillColor);
  rect(x + 300, y, w, h);
}

function drawTopping(x, y, color) {
  noStroke();
  fill(color);
  arc(x + 300, y, 20, 20, PI, 0);
}

function drawCandle(x, y, fillColor, strokeColor) {
  stroke(strokeColor);
  strokeWeight(3);
  fill(fillColor);
  rect(x + 300, y, 25, 60);
}

function drawStick(x, y, color, weight) {
  stroke(color);
  strokeWeight(weight);
  line(x + 300, y, x + 300, y - 12);
}

function drawLongStick(x, y, color) {
  stroke(color);
  strokeWeight(3);
  line(x + 300, y, x + 300, y + 200);
}

function drawCircle(x, y, r, fillColor, strokeColor) {
  stroke(strokeColor);
  strokeWeight(3);
  fill(fillColor);
  circle(x + 300, y, r * 2);
}

// Button click handler
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('startButton').addEventListener('click', () => {
    console.log("Button clicked");
    cakeDrawn = true;
  });
});
