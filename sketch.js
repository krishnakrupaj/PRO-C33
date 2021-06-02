const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;  
var divisions = [];
var plinkos = [];
var p;
var turn = 0;
var gamestate = "play"
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,790,800,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Ground(k, 650, 10, 300));
   }
    for (var j = 25; j <=width; j=j+50){
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50){
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 25; j <=width; j=j+50){    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50){    
       plinkos.push(new Plinko(j,375));
    }
    
    }

function draw() {
  background("black");
  Engine.update(engine);
  ground.display();
  noStroke()
  for (var i = 0; i < plinkos.length; i++){plinkos[i].display();} 
  for (var k = 0; k < divisions.length; k++){divisions[k].display();}

  //100-500_1
  textSize(25);
  fill("aqua");
  text("100",20,550)
  text("200",100,550);
  text("300",180,550);
  text("400",260,550);
  text("500",340,550)
  //100-500_2
  text("500",420,550)
  text("400",500,550);
  text("300",580,550);
  text("200",660,550);
  text("100",740,550)
  
  console.log(gamestate)
  stroke("pink")
  strokeWeight(7)
  line(0,450,800,450)


  if(gamestate==="end"){
    strokeWeight(3);
    stroke("black");
    fill(random(0, 255), random(0, 255), random(0, 255));
    textSize(50);
    textFont("Segoe Print");
    text("GAME OVER", 250, 350);
    noStroke()
    textSize(35);
  fill("white");
  text("Yay! You scored '"+score+"' points",200,40);
  
  }

  if(gamestate==="play"){
    noStroke()
    textSize(40);
  fill("pink");
  text("Score : "+score,20,30);
    textSize(20);
  fill("white");
  text("you will have 5 turns! click anywhere and score points!",222,30);
  if (p != null){
    p.display()
    //scores
    if (p.body.position.y>475){ 
          
      if(0<p.body.position.x&&p.body.position.x<800){
        score = score+100;        
      }
      if(80<p.body.position.x&&p.body.position.x<720){
          score = score+100;          
        }
      if(160<p.body.position.x&&p.body.position.x<640){
            score = score+100;            
          }
      if(240<p.body.position.x&&p.body.position.x<560){
              score = score+100;
            }
      if(320<p.body.position.x&&p.body.position.x<480){
        score = score+100;
      }
      p=null;
    }
    if(turn === 6){gamestate = "end"}
    
  }
}
}

function mousePressed(){
  if (gamestate !== "end"){
  turn++
  p = new particle(mouseX,10)
}
}
