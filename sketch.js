var box1 
var box2

function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(200,200,30,20,2);
  box2 = new Box(50,50,50,10,3);
}

function draw() 
{
  background(220);
  box1.show()
  box2.show()
  box2.move()
}

