class Rocket {
    constructor(){
this.positionX = 250;
this.positionY = 570;
this. size1 = 40;
this.size2 = 120;
    }
    body(){
        //Flame
  noStroke();
  fill(255, 150, 0);
  ellipse(this.positionX, this.positionY + random(65, 75), this. size1 - 10, this.size2 - 70
  );
  fill(255, 225, 0);
  ellipse(this.positionX, this.positionY + random(65, 10), this. size1 - 20, this.size2 - 70
  );

  fill(250);
  //Exhausts
  fill(205, 0, 0);
  arc(this.positionX, this.positionY + 70, this. size1, this.size2, PI, 0, CHORD);

  //Body
  fill(120);
  ellipse(this.positionX, this.positionY, this. size1 + 10, this.size2);
  fill(150);
  ellipse(this.positionX, this.positionY, this. size1 + 5, this.size2 - 5);

  //Exhaust long
  fill(205, 0, 0);
  ellipse(this.positionX, this.positionY + 60, this. size1 - 30, this.size2 - 70);

  //Windows
  fill(205, 0, 0);
  ellipse(this.positionX, this.positionY - 20, this. size1 - 10, this.size2 - 90);
  fill(210, 230, 250);
  ellipse(this.positionX, this.positionY - 20, this. size1 - 20, this.size2 - 100);

  //Anthena
  fill(205, 0, 0);
  ellipse(this.positionX - 0.5, this.positionY - 84, this. size1 - 30, this.size2 - 110);
  rect(this.positionX + 2, this.positionY - 80, this. size1 - 45, this.size2 - 98);

    }
    movement(){
    this.positionX=mouseX;
    }
    
}