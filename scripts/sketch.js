var img;
var center;
var r = 0;
var g = 10;
var multFactor = 40;
var amount = 10;
var horses = [];

function randomBetweenRange(max, min=0)
{
  return Math.floor(Math.random()*(max+1-min)+min);
}

function gradualGradient(x, deg=1)
{
  return 127.5*sin((1/deg)*x)+127.5
}

function preload()
{
  img = loadImage('assets/elephant.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  textSize(windowWidth/15);
  textStyle(BOLD);
  center = createVector(windowWidth/2, windowHeight/2);
  for (let k=0; k<45; ++k)
  {
    let a = randomBetweenRange(0, 10) % 2 == 0 ? 255 : 0;
    horses.push(new horse(randomBetweenRange(windowWidth, 10), randomBetweenRange(windowHeight, 10), multFactor, windowWidth, a));
  }
}

function draw() {
  background(220);
  tint(255, 63);
  image(img, -windowWidth/8, -windowHeight/7, 1280*0.98, 720*0.98);

  for (let q=0; q<amount; q++)
  {
    horses[q].draw();
  }

  push();
  translate(center.x, center.y);
  fill(gradualGradient(r, g), gradualGradient(r, g), gradualGradient(r, g));
  text("Happy Father's Day Daddy!", 0, 0);
  pop();
  r++;
}