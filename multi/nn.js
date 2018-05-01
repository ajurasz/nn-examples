function sigmoid(x) {
  return 1 / (1 + Math.exp(-x));
}

class NeuralNetwork {
  constructor(inputNodes, hidenNodes, outputNodes) {
    this.inputNodes = inputNodes;
    this.hidenNodes = hidenNodes;
    this.outputNodes = outputNodes;

    this.weights_ih = new Matrix(this.hidenNodes, this.inputNodes);
    this.weights_ih.randomize();

    this.weights_ho = new Matrix(this.outputNodes, this.hidenNodes);
    this.weights_ho.randomize();

    this.bias_h = new Matrix(this.hidenNodes, 1);
    this.bias_h.randomize();

    this.bias_o = new Matrix(this.outputNodes, 1);
    this.bias_o.randomize();
  }

  feedforward(inputs_array) {
    const inputs = Matrix.fromArray(inputs_array);

    let hidden = Matrix.multiply(this.weights_ih, inputs);
    hidden.add(this.bias_h);
    hidden.map(sigmoid);

    let output = Matrix.multiply(this.weights_ho, hidden);
    output.add(this.bias_o);
    output.map(sigmoid);

    return output.toArray();
  }

  train(inputs, answer) {
    // TODO
  }
}
