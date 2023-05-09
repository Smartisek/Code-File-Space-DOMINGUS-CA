class Stars {
    constructor(){
        this.xStars = 120;
        this.yStars = -110;
        this.sizeStars = 100;
    }

    body(){
        push();
  fill(50);
  stroke(35);
  strokeWeight(5);
  ellipse(this.xStars,this.yStars,this.sizeStars+10);
  
  noStroke();
   fill(70);
  ellipse(this.xStars-25,this.yStars+10,this.sizeStars-60,this.sizeStars-50);
  ellipse(this.xStars+15,this.yStars-20,this.sizeStars-60);
  ellipse(this.xStars+25,this.yStars+20, this.sizeStars-70,this.sizeStars-80);
  //Shading
  fill(80);
  ellipse(this.xStars-25,this.yStars+10,this.sizeStars-70,this.sizeStars-60);
  ellipse(this.xStars+15,this.yStars-20,this.sizeStars-70);
  ellipse(this.xStars+25,this.yStars+20, this.sizeStars-80,this.sizeStars-90);
  
  pop();
    }
    move(){
        this.yStars += 0.5;
    }
}