class Point {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.label = this.x > this.y ? 1 : -1;
  }

  show() {
    stroke(0);
    strokeWeight(1);
    if (this.label == 1) {
      fill(255);
    } else {
      fill(0);
    }
    ellipse(this.x, this.y, 32, 32);
  }
}
