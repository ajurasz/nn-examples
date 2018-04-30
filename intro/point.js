function fn(x) {
  return 0.3 * x + 0.2;
}

class Point {
  constructor(x = random(-1, 1), y = random(-1, 1)) {
    this.x = x;
    this.y = y;

    const Y = fn(this.x);
    this.label = this.y > Y ? 1 : -1;
  }

  get px() {
    return map(this.x, -1, 1, 0, width);
  }

  get py() {
    return map(this.y, -1, 1, width, 0);
  }

  show() {
    stroke(0);
    strokeWeight(1);
    if (this.label == 1) {
      fill(255);
    } else {
      fill(0);
    }
    ellipse(this.px, this.py, 16, 16);
  }
}
