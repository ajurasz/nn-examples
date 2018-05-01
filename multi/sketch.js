function setup() {
  createCanvas(450, 450);

  const m1 = new Matrix(3, 2);
  m1.randomize();
  m1.print();
  const m2 = new Matrix(2, 3);
  m2.randomize();
  m2.print();

  const m3 = Matrix.multiply(m1, m2);
  m3.print();
  const transpose = m3.transpose();
  transpose.print();
}

function draw() {}
