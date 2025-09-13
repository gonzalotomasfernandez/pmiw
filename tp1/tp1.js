let obra;
let franjas = 8;

function preload() {
  obra = loadImage('data/obra.jpg');
}

function setup() {
  createCanvas(800, 400);
  obra.resize(400, 400);
}


function draw() {
  image(obra, 0, 0);
  modulo(franjas, width/2, width/6, width/2, height/height);
}

function mousePressed () {
  if (franjas<20) {
    franjas++;
  }
}

function keyPressed() {
  if (key == ' ') {
    franjas=8;
    
  }
}
