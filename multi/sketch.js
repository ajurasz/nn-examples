let training_data = [
  {
    inputs: [0, 0],
    targets: [0]
  },
  {
    inputs: [1, 1],
    targets: [0]
  },
  {
    inputs: [1, 0],
    targets: [1]
  },
  {
    inputs: [0, 1],
    targets: [1]
  }
];

let nn;

function setup() {
  createCanvas(450, 450);

  nn = new NeuralNetwork(2, 2, 1);

  // XOR problem
  for (let i = 0; i < 100000; i++) {
    let rtd = random(training_data);
    nn.train(rtd.inputs, rtd.targets);
  }

  nn.feedforward([0, 0]).output.print();
  nn.feedforward([1, 1]).output.print();
  nn.feedforward([1, 0]).output.print();
  nn.feedforward([0, 1]).output.print();
}

function draw() {}
