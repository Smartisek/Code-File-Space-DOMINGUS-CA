//Variables
let rocket;
let cloud1;
let cloud2;
let cloud3;
let planetSpace;
let starsSpace;
let cloudX = 100;
let cloudY = 120;
let newAsteroid;
let newAsteroid2;
let asteroidScore;
let xWind = 120;
let yWind = -10;
let fire;
let hit;
let astronautWin;
let hitAsteroid;
let astronaut;
let astronautY = -300;
let planetIntro;
let planetIntroLost;
let starsBack;
let chooseDif;
let textX = -150;
let textX2 = 900;
let text3 = 350;
let text4 = 350;
let tutorialText = 1100;
let difficulty = 1.75;

// Table data
let table;
let BulletsFired = 0;
let HitsTaken = 0;
let AsteroidDestroyed = 0;
let saveButton;

//Gameplay variables
let score = 0;
let lifes = 3;
let scenes = 0;

//Arrays
let bullets = [];
let asteroids = [];
let winds = [];
let lifeRocket = ["🚀","🚀","🚀"];

//Preloading sounds
// Used sounds from freesound.org 
//https://freesound.org/people/jeckkech/sounds/391658/ , https://freesound.org/people/jeremysykes/sounds/344512/ , https://freesound.org/people/Bertsz/sounds/524312/

function preload(){
  fire = loadSound("Sounds.js/344512__jeremysykes__laser05.mp3");
  fire.setVolume(0.03);
  hit = loadSound("Sounds.js/gettingHit.mp3");
  hit.setVolume(0.05);
  hitAsteroid = loadSound("Sounds.js/Collision.mp3");
  hitAsteroid.setVolume(0.02);
}

function setup() {
  createCanvas(700, 700);
  noCursor();
  rocket = new Rocket();
  cloud1 = new Clouds(cloudX,cloudY);
  cloud2 = new Clouds(cloudX+300, cloudY+50);
  cloud3 = new Clouds(cloudX+470, cloudY+150);
  cloud4 = new Clouds(cloudX,cloudY);
  cloud5 = new Clouds(cloudX+300, cloudY+50);
  cloud6 = new Clouds(cloudX+470, cloudY+150);
  asteroidScore = new Asteroid(80,1340);
  astronaut = loadImage("CuteAstronaut.png");
  planetIntro = loadImage("planetIntro.png");
  planetIntroLost = loadImage("planetIntroLost.png");
  starsBack = loadImage("stars.png");
  chooseDif = loadImage("Choose.png");
  astronautWin = loadImage("astronautWin.png");
  
  planetSpace = new Planet();
  starsSpace = new Stars();

 table = new p5.Table();
 table.addColumn("BulletsFired");
 table.addColumn("AsteroidsDestroyed");
 table.addColumn("HitsTaken");

//  saveButton = createButton("Save");



  //Spawning asteroids using class and for loop, putting them into array so they can be deleted when collide
  for(let x=0; x<7; x++){
    asteroids[x] = new Asteroid(random(20,width),random(-200,-20));
  }
  //Creating wind lines and putting them into array
  for(let w=0; w<6; w++){
    let windy = {
      x: xWind,
      y: yWind
    }
    winds.push(wind);
    }
  }

function draw() {
  background(152,215,255);
    
  if(scenes === 0){
    StartGame();
  }
  if(scenes === 1){
    tutorial();
  }
  if(scenes === 2){
    choose();
  }
  if(scenes === 3){
    Game();
  }
  //Game over when no more lives
  if(scenes === 4 && lifes === 0){
    GameOver();
  }

  if(scenes === 4 && score === 120){
    GameWin();

  }
  if(scenes === 5){
    reset();
  }
}
//All of these need to be reset so it works like playing over again
function reset(){
  scenes = 0;
  score = 0;
  lifes = 3;
  BulletsFired = 0;
  HitsTaken = 0;
  AsteroidDestroyed = 0;
  starsSpace.yStars = -110;
  planetSpace.yPlanet = 2000;
  //Reseting new asteroids for reset function 
  for(let p=0; p<7; p++){
    asteroids[p] = new Asteroid(random(20,width),random(-200,-20));
  }
  cloud1.cloudY=120;
  cloud2.cloudY=120;
  cloud3.cloudY=120;
}

//When clicking mouse creting bullets plus putting them into bullet array so they can disapear when collision 
//Calling sound whenever clicked
function mousePressed(){
  let bullet = {
    x: mouseX,
    y: 470
  };
  if(score < 120){
    bullets.push(bullet);
    fire.play();
    scenes+=0;
    BulletsFired +=1;
  }
}

//Options for selecting difficulty before game, passing difficulty value based on a key
function keyPressed(){
  if(keyCode === ENTER){
    scenes+=1;
  }
  if(keyCode === LEFT_ARROW){
    difficulty = 1.4;
    scenes+=1;
  }
  if(keyCode === UP_ARROW){
    difficulty = 1.75;
    scenes+=1;
  }
  if(keyCode === RIGHT_ARROW && scenes){
    difficulty = 2.05;
    scenes+=1;
  }
}

function wind() {
  stroke(230);
  line(xWind - 50, yWind + 70, xWind - 50, yWind + 230);
  line(xWind + 250, yWind, xWind + 250, yWind + 210);
  line(xWind + 80, yWind + 150, xWind + 80, yWind + 410);
  line(xWind + 480, yWind + 150, xWind + 480, yWind + 280);
  line(xWind + 680, yWind + 150, xWind + 680, yWind + 280);
}

// Function for the whole game
function Game(){
  background(104,57,125);
    //getting into space change background and call stars
if(planetSpace.yPlanet <= 1300){
  background(25,24,25);
  image(starsBack,1,-200,900,1200);
  starsSpace.body();
  starsSpace.move();
  cloud1.cloudY+=2.5;
  cloud2.cloudY+=2.5;
  cloud3.cloudY+=2.5;
 }
 cloud1.body();
 cloud2.body();
 cloud3.body();

 //Planet functions to appear after a while so it looks like we got into space 
 planetSpace.body();
 planetSpace.yPlanet-=0.5;
 if(planetSpace.yPlanet <= 1100){
  planetSpace.yPlanet = 1100;
  starsSpace.yStars =115;
 }


 //Importing rocket
 rocket.body();
 rocket.movement();
 //Looping wind to make it look like going up
 for(wind of winds){
  yWind+=1;
  wind();
  if(yWind > height){
    yWind = -300;
  }
}
//showing of asteroids in an asteroids array and making them go down, once you get into space they go down faster making it more difficult
 for(let y=0; y<asteroids.length; y++){
  asteroids[y].body();
  asteroids[y].yAsteroid+=difficulty;
  if(planetSpace.yPlanet <= 1100){
    asteroids[y].yAsteroid+=difficulty+0.05;
  }
 }
 

//bullets - for every bullet in bullets array create ellipse plus make it go up with speed -8
for(let bullet of bullets){
  if(score <120){
    fill(250);
  ellipse(bullet.x,bullet.y, 7.5, 15);
  bullet.y-=8;
  }
}

//collision of bullets and asteroids
//for every asteroid of asteroids array and for every bullet of bullets do something if distance between these two is less than via code
//splice for removing the item from an array plus creating a new asteroid for every destroyed one
//reference for the code: https://www.youtube.com/watch?v=IUbEGcvZYJQ
for(let asteroid of asteroids){
  for(let bullet of bullets){
    if(dist(asteroid.xAsteroid,asteroid.yAsteroid,bullet.x,bullet.y)<40){
      asteroids.splice(asteroids.indexOf(asteroid),1);
      bullets.splice(bullets.indexOf(bullet), 1);
      hitAsteroid.play();
      newAsteroid = new Asteroid(random(20,width),random(-200,-20));
      asteroids.push(newAsteroid);
      score+=1;
      AsteroidDestroyed +=1;
    }
  }
}
//collision for when rocket gets hit by an asteroid
//for every asteroid of asteroids array check if distatnce of asteroid's x and y and rocket's x and y is less than 35, if yes stop everyting 
for(asteroid of asteroids){
  if(dist(asteroid.yAsteroid,asteroid.xAsteroid,rocket.positionY-84,rocket.positionX)<35){
    asteroids.splice(asteroids.indexOf(asteroid),1);
    lifes-=1;
    hit.play();
    HitsTaken +=1;
  }
//if asteroids get over 720 take away life
  for(asteroid of asteroids){
    if(asteroid.yAsteroid>=720){
      asteroids.splice(asteroids.indexOf(asteroid),1);
      newAsteroid2 = new Asteroid(random(20,width),random(-200,-20));
      asteroids.push(newAsteroid2);
      lifes-=1;
    }
  }
}
//Rocket emojis symbolising lifes
for(let r=0;r<lifes;r++){
  push();
  textSize(35);
  text(lifeRocket[r],570+2*r*20,680);
  pop();
}
if(lifes<=0){
  scenes+=1;
}
if(score === 120){
  scenes+=1;
}
//Showcase score
push();
 scale(0.5);
 asteroidScore.body();
 pop();
 push();
 stroke(5);
 textSize(25);
 text(score, 85, 680);
 pop();

}

function StartGame(){
  background(25,24,25);
  image(starsBack,1,-200,900,1200);
  image(planetIntro, 200, astronautY+75,300,300);
  image(astronaut,250,astronautY,200,200);
  astronautY+=1.5;
  if(astronautY >=-10){
    astronautY=-10;
  }

  push();
  textAlign(CENTER);
  noStroke();
  textSize(35);
  fill(104,57,125);
  text("WELCOME TO",textX,350);
  textX+=2.57;
  if(textX >=350){
    textX=350;
  }
  fill(60,159,142);
  text("SPACE DOMMINGUS",textX2,395);
  textX2-=2.8;
  if(textX2 <=350){
    textX2=350;
  }
  pop();
  push();
  textAlign(CENTER);
  fill(200);
  textSize(20);
  if(textX>=350){
    text("PRESS 'ENTER' TO CONTINUE", 350,550);
  }
  pop();
}

function tutorial(){
  background(25,24,25);
  image(starsBack,1,-200,900,1200);
  image(planetIntro, 200, astronautY+75,300,300);
  image(astronaut,250,astronautY,200,200);
  astronautY+=1.5;
  if(astronautY >=-10){
    astronautY=-10;
  }

  push();
  textAlign(CENTER);
  noStroke();
  textSize(35);
  fill(104,57,125);
  text("WELCOME TO",text3,350);
  text3-=2.57;
  fill(60,159,142);
  text("SPACE DOMMINGUS",text4,395);
  text4+=2.8;
  pop();
 push();
  textAlign(CENTER);
  textSize(15);
  fill(60,159,142);
  text("DESTROY ALL 120 ASTEROIDS AND SAVE YOUR PLANET!",350,tutorialText);
  text("YOU PLAY WITH MOUSE AND FIRE WITH LEFT CLICK", 350,tutorialText+40);
  text("YOU ONLY HAVE 3 LIFES SO BE QUICK", 350,tutorialText+80);
  
  textSize(25);
  fill(104,57,125);
  text("PRESS ENTER TO CHOOSE DIFFICULTY",350,tutorialText+150);
 pop();
 tutorialText-=3.7;
 if(tutorialText <=400){
  tutorialText = 400;
 }
}

function choose(){
  background(25,24,25);
  image(starsBack,1,-200,900,1200);
  image(planetIntro, 200, astronautY+75,300,300);
  image(astronaut,250,astronautY,200,200);
  image(chooseDif,200, 400,300,300);
  astronautY+=1.5;
  if(astronautY >=-10){
    astronautY=-10;
  }
  textAlign(CENTER);
  fill(60,159,142);
  textSize(15);
  text("CHOOSE DIFFICULTY", 350,365);
  fill(104,57,125);
  text("EASY",250,570);
  text("HARD",450, 570);
  text("MEDIUM",350,495);
}

function GameOver(){
  background(25,24,25);
  image(starsBack,1,-200,900,1200);
  image(planetIntroLost, 200, 65,300,300);
  image(astronaut,250,-10,200,200);
  cursor();

  push();
  fill(60,159,142);
  textAlign(CENTER);
  textSize(15);
  text("YOU LOST", 350, 350);
  text("YOUR SCORE WAS:", 350,390);
  text(score,433,390);
  text("CLICK ENTER IF YOU'D LIKE TO TRY AGAIN", 350,420);
  pop();

  saveButton = createButton("Save");
  saveButton.position(320,450);
  saveButton.mousePressed(saveData);

}
function GameWin(){
  background(25,24,25);
  image(starsBack,1,-200,900,1200);
  // image(planetIntro, 200, 65,300,300);
  image(astronautWin,200,10,300,400);
 
  push();
  fill(60,159,142);
  textAlign(CENTER);
  textSize(15);
  text("YOU WON!", 350, 420);
  text("YOU SAVED THE PLANET", 350,460);
  text("CLICK ENTER IF YOU'D LIKE TO TRY HARDER DIFFICULTY", 350,500);
  pop();

  saveButton = createButton("Save");
  saveButton.position(320,450);
  saveButton.mousePressed(saveData);
}



function addData(){
  let newRow = table.addRow();
  newRow.setNum("BulletsFired", BulletsFired);
  newRow.setNum("AsteroidsDestroyed", AsteroidDestroyed);
  newRow.setNum("HitsTaken", HitsTaken);
}

function saveData(st){
  addData();
  st = saveTable(table, "gamestat.csv");
}