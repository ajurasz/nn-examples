class Perceptron {
  constructor(n, fn, lr = 0.1) {
    this.weights = new Array(n);
    for (let i = 0; i < n; i++) {
      this.weights[i] = random(-1, 1);
    }
    this.lr = lr;
  }

  guess(inputs) {
    let sum = 0;
    for (let i = 0; i < this.weights.length; i++) {
      sum += inputs[i] * this.weights[i];
    }
    return this.activate(sum);
  }

  activate(sum) {
    return sum > 0 ? 1 : -1;
  }

  train(inputs, target) {
    const guess = this.guess(inputs);
    const error = target - guess;
    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i] += this.lr * error * inputs[i];
    }
  }

  guessY(x) {
    // w0x + w1y + w2biass
    // w1y = -w2biass - w0x
    // y = - w2/w1 * biass - w0/w1 * x
    return (
      -this.weights[2] / this.weights[1] * 1 -
      this.weights[0] / this.weights[1] * x
    );
  }

  toString() {
    console.log(this);
  }
}
