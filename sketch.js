
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobj1,bobj2,bobj3, bobj4,bobj5, robj
var rope1,rope2,rope3, rope4,rope5;
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	robj=new roof(width/2,height/4,width/7,20);
	bobDiameter=40;
	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bobObject1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobj2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobj3=new bob(startBobPositionX,startBobPositionY,bobDiameter);
	bobj4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobj5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	
	//Create a Ground
	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	rope1=new rope(bobObject1.body,robj.body,-bobDiameter*2, 0)

	rope2=new rope(bobj2.body,robj.body,-bobDiameter*1, 0)
	rope3=new rope(bobj3.body,robj.body,0, 0)
	rope4=new rope(bobj4.body,robj.body,bobDiameter*1, 0)
	rope5=new rope(bobj5.body,robj.body,bobDiameter*2, 0)

	/*constraint1={
		bodyA:bobObject1.body,
		bodyB:robj.body,
		pointB: {x:-bobDiameter*2, y:0}
	}

	constraint2={
		bodyA:bobj2.body,
		bodyB:robj.body,		
		pointB: {x:-bobDiameter, y:0}
	}


	constraint3={
		bodyA:bobj3.body,
		bodyB:robj.body,		
		pointB: {x:0, y:0}

	}

	constraint4={
		bodyA:bobj4.body,
		bodyB:robj.body,		
		pointB: {x:bobDiameter, y:0}	

	}

	constraint5={
		bodyA:bobj5.body,
		bodyB:robj.body,		
		pointB: {x:bobDiameter*2, y:0}
	}

	var pendulum1=Constraint.create(constraint1)
	var pendulum2=Constraint.create(constraint2)
	var pendulum3=Constraint.create(constraint3)
	var pendulum4=Constraint.create(constraint4)
	var pendulum5=Constraint.create(constraint5)

	World.add(world, pendulum1);
	World.add(world, pendulum2);
	World.add(world, pendulum3);
	World.add(world, pendulum4);
	World.add(world, pendulum5);
	*/
	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  robj.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  bobObject1.display();
  bobj2.display();
  bobj3.display();
  bobj4.display();
  bobj5.display();
 
  
  
	
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

  	}
}


function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}






