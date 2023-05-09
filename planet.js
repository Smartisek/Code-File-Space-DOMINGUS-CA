class Planet {
    constructor(){
        this.xPlanet = 250;
        this.yPlanet = 2000;
        this.size = 100;
    }
    body(){
        push();
        strokeWeight(20);
        stroke(100,150,250); 
         fill(20,200, 220);
       ellipse(this.xPlanet,this.yPlanet,width*2)
          noStroke();
          fill(110,150,100);
          rect(this.xPlanet,this.yPlanet-530,250,150);
          pop();
    }

}