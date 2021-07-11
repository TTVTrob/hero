const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(900, 0, 70, 70);
  box2 = new Box(900, 70, 70, 70);
  box3 = new Box(900, 140, 70, 70);
  box4 = new Box(900, 210, 70, 70);
  box5 = new Box(900, 280, 70, 70);
  box6 = new Box(900, 350, 70, 70);
  box7 = new Box(900, 420, 70, 70);
  box8 = new Box(900, 490, 70, 70);

  box11 = new Box(830, 0, 70, 70);
  box21 = new Box(830, 70, 70, 70);
  box31 = new Box(830, 140, 70, 70);
  box41 = new Box(830, 210, 70, 70);
  box51 = new Box(830, 280, 70, 70);
  box61 = new Box(830, 350, 70, 70);
  box71 = new Box(830, 420, 70, 70);
  box81 = new Box(830, 490, 70, 70);

  box12 = new Box(760, 0, 70, 70);
  box22 = new Box(760, 70, 70, 70);
  box32 = new Box(760, 140, 70, 70);
  box42 = new Box(760, 210, 70, 70);
  box52 = new Box(760, 280, 70, 70);
  box62 = new Box(760, 350, 70, 70);
  box72 = new Box(760, 420, 70, 70);
  box82 = new Box(760, 490, 70, 70);

  box112 = new Box(690, 0, 70, 70);
  box212 = new Box(690, 70, 70, 70);
  box312 = new Box(690, 140, 70, 70);
  box412 = new Box(690, 210, 70, 70);
  box512 = new Box(690, 280, 70, 70);
  box612 = new Box(690, 350, 70, 70);
  box712 = new Box(690, 420, 70, 70);
  box812 = new Box(690, 490, 70, 70);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();

  box11.display();
  box21.display();
  box31.display();
  box41.display();
  box51.display();
  box61.display();
  box71.display();
  box81.display();

  box12.display();
  box22.display();
  box32.display();
  box42.display();
  box52.display();
  box62.display();
  box72.display();
  box82.display();

  box112.display();
  box212.display();
  box312.display();
  box412.display();
  box512.display();
  box612.display();
  box712.display();
  box812.display();

  hero.display();
  rope.display();
  monster.display();

}
function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
  //}
}