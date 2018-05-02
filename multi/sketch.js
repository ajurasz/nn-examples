let nn;

function setup() {
  createCanvas(450, 450);

  // const m1 = new Matrix(3, 2);
  // m1.randomize();
  // m1.print();
  // const m2 = new Matrix(2, 3);
  // m2.randomize();
  // m2.print();

  // const m3 = Matrix.multiply(m1, m2);
  // m3.print();
  // const transpose = m3.transpose();
  // transpose.print();

  // let array = [1, 2, 0];
  // const m4 = Matrix.fromArray(array);
  // m4.print();

  nn = new NeuralNetwork(2, 2, 2);
  inputs = [1, 0];
  targets = [1, 0];
  nn.train(inputs, targets);

  // let output = nn.feedforward(inputs);
  // console.log(output.toArray());
}

function draw() {}
