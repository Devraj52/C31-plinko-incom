const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constarint=Matter.Constraint;

function setup() {
  createCanvas(480,580);
  // ground
  ground=new Ground(240,580,480,20);
  // dividers
  part1=new Division(1,420,4,300);
  part2=new Division(81,420,4,300);
  part3=new Division(161,420,4,300);
  part4=new Division(241,420,4,300);
  part5=new Division(321,420,4,300);
  part6=new Division(401,420,4,300);
  part7=new Division(478,420,4,300);
  // dots
  dot1=new Plinko(10,200,2)
}

function draw() {
  background("black"); 
  // display ground.
  ground.display(); 
  // divider.
  part1.display();
  part2.display();
  part3.display();
  part4.display();
  part5.display();
  part6.display();
  part7.display();
  // Plinkos/Dots.
  dot1.display();
  drawSprites();
}