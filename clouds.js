class Clouds{
    constructor(cloudX,cloudY){
        this.cloudX = cloudX;
        this.cloudY = cloudY;
        this.sizeCloud = 30;
    }
    body(){
   noStroke();
  fill(250);
  ellipse(this.cloudX - 25, this.cloudY - 14, this.sizeCloud + 5);
  ellipse(this.cloudX, this.cloudY - 20, this.sizeCloud + 20);
  ellipse(this.cloudX + 30, this.cloudY - 10, this.sizeCloud + 15);
  ellipse(this.cloudX + 20, this.cloudY + 5, this.sizeCloud + 10);
  ellipse(this.cloudX - 10, this.cloudY, this.sizeCloud + 15);
    }
}