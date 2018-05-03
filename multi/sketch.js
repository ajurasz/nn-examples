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
let lr_slider;

function setup() {
  createCanvas(450, 450);

  nn = new NeuralNetwork(2, 2, 1);
  lr_slider = createSlider(0.01, 0.5, 0.1, 0.01);

  // XOR problem
  for (let i = 0; i < 50000; i++) {
    let rtd = random(training_data);
    nn.train(rtd.inputs, rtd.targets);
  }
}

function draw() {
  background(0);
  nn.setLearningRate(lr_slider.value());
  for (let i = 0; i < 1000; i++) {
    let rtd = random(training_data);
    nn.train(rtd.inputs, rtd.targets);
  }

  let res = 10;
  let cols = width / res;
  let rows = height / res;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x1 = i / cols;
      let x2 = j / rows;
      let y = nn.feedforward([x1, x2]).output.toArray();
      noStroke();
      fill(y * 255);
      rect(i * res, j * res, res, res);
    }
  }
}
