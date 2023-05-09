class Asteroid {
    constructor(x, y) {
        this.xAsteroid = x;
        this.yAsteroid = y;
        this.sizeAsteroid = 30;
    }
    body(){
        noStroke();
  //Flames
  fill(255, 150, 0);
  ellipse(
    this.xAsteroid,
    this.yAsteroid - random(26, 32),
    this.sizeAsteroid + 50,
    this.sizeAsteroid + 100
  );
  fill(255, 225, 0);
  ellipse(
    this.xAsteroid,
    this.yAsteroid - random(26, 30),
    this.sizeAsteroid + 35,
    this.sizeAsteroid + 85
  );
  //First
  fill(50);
  ellipse(this.xAsteroid, this.yAsteroid, this.sizeAsteroid + 40, this.sizeAsteroid + 40);
  rect(this.xAsteroid + 10, this.yAsteroid - 30, this.sizeAsteroid, this.sizeAsteroid, 10);
  rect(this.xAsteroid - 40, this.yAsteroid - 10, this.sizeAsteroid, this.sizeAsteroid, 10);
  ellipse(this.xAsteroid, this.yAsteroid - 30, this.sizeAsteroid + 10, this.sizeAsteroid - 10);
  ellipse(this.xAsteroid, this.yAsteroid + 30, this.sizeAsteroid + 10, this.sizeAsteroid - 10);
  //Shading
  fill(70);
  ellipse(this.xAsteroid, this.yAsteroid, this.sizeAsteroid + 30, this.sizeAsteroid + 30);
  rect(
    this.xAsteroid + 10,
    this.yAsteroid - 25,
    this.sizeAsteroid - 10,
    this.sizeAsteroid - 10,
    10
  );
  rect(this.xAsteroid - 35, this.yAsteroid - 5, this.sizeAsteroid - 10, this.sizeAsteroid - 10, 10);
  ellipse(this.xAsteroid, this.yAsteroid - 30, this.sizeAsteroid, this.sizeAsteroid - 20);
  ellipse(this.xAsteroid, this.yAsteroid + 20, this.sizeAsteroid, this.sizeAsteroid);
  //Craters
  fill(30);
  ellipse(this.xAsteroid + 10, this.yAsteroid - 10, this.sizeAsteroid - 5, this.sizeAsteroid - 10);
  ellipse(this.xAsteroid - 5, this.yAsteroid + 20, this.sizeAsteroid - 15, this.sizeAsteroid - 20);
}

    }