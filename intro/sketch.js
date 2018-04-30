let ptron;
let dataSet = Array(200);

function setup() {
  createCanvas(450, 450);
  background(255);

  line(0, 0, width, height);

  ptron = new Perceptron(3, 0.1);

  for (let i = 0; i < dataSet.length; i++) {
    dataSet[i] = new Point();
    dataSet[i].show();
  }
}

function mouseClicked() {
  for (let i = 0; i < dataSet.length; i++) {
    const target = dataSet[i].label;
    const inputs = [dataSet[i].x, dataSet[i].y, 1];
    ptron.train(inputs, target);
  }
}

function draw() {
  for (let i = 0; i < dataSet.length; i++) {
    const target = dataSet[i].label;
    const inputs = [dataSet[i].x, dataSet[i].y, 1];
    const guess = ptron.guess(inputs);
    if (guess == target) {
      fill(0, 255, 0);
    } else {
      fill(255, 0, 0);
    }
    ellipse(inputs[0], inputs[1], 8, 8);
  }
}
