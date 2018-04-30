let ptron;
let dataSet = Array(200);
let trainingIndex = 0;

function setup() {
  createCanvas(450, 450);

  ptron = new Perceptron(3, 0.001);

  for (let i = 0; i < dataSet.length; i++) {
    dataSet[i] = new Point();
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
  background(255);
  const p1 = new Point(-1, fn(-1));
  const p2 = new Point(1, fn(1));
  line(p1.px, p1.py, p2.px, p2.py);

  const p3 = new Point(-1, ptron.guessY(-1));
  const p4 = new Point(1, ptron.guessY(1));
  line(p3.px, p3.py, p4.px, p4.py);

  for (let i = 0; i < dataSet.length; i++) {
    dataSet[i].show();
  }

  for (let i = 0; i < dataSet.length; i++) {
    const target = dataSet[i].label;
    const inputs = [dataSet[i].x, dataSet[i].y, 1];
    const guess = ptron.guess(inputs);
    if (guess == target) {
      fill(0, 255, 0);
    } else {
      fill(255, 0, 0);
    }
    ellipse(dataSet[i].px, dataSet[i].py, 8, 8);
  }

  const point = dataSet[trainingIndex];
  const target = point.label;
  const inputs = [point.x, point.y, 1];
  ptron.train(inputs, target);
  trainingIndex++;

  if (trainingIndex == dataSet.length) {
    trainingIndex = 0;
  }
}
