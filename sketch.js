var helicopterIMG, helicopterSprite, packageSprite,packageIMG, rec1Sprite, rec2Sprite, rec3Sprite;;
var packageBody,ground, rec1, rec2, rec3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}


function setup() 
{
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 20,20);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	rec1Sprite = createSprite(width/2, 650, 200, 20);
	rec1Sprite.shapeColor = "red";

	rec2Sprite = createSprite(310, 600, 20, 100);
	rec2Sprite.shapeColor = "red";

	rec3Sprite = createSprite(490, 600, 20, 100);
	rec3Sprite.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 25 , {restitution:0, friction:0, isStatic:true});
	World.add(world, packageBody);	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	rec1 = Bodies.rectangle(width/2, 650, 200, 20, {isStatic:true} );
	World.add(world, rec1);

	rec2 = Bodies.rectangle(310, 600, 20, 100, {isStatic:true} );
	World.add(world, rec2);

	rec3 = Bodies.rectangle(490, 600, 20, 100, {isStatic:true} );
	World.add(world, rec3);

	Engine.run(engine);

	console.log(width);
}


function draw() 
{
  rectMode(CENTER);

  Engine.update(engine);

  background(0);

  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;

  drawSprites();
  keyPressed();
}


function keyPressed()
{
  if (keyCode === DOWN_ARROW)
 	{
   	  // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	  Matter.Body.setStatic(packageBody, false);
	}
}