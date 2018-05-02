function sigmoid(x) {
  return 1 / (1 + Math.exp(-x));
}

function dsigmoid(y) {
  return y * (1 - y);
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

    this.learning_rate = 0.01;
  }

  feedforward(inputs_array) {
    const inputs = Matrix.fromArray(inputs_array);

    let hidden = Matrix.multiply(this.weights_ih, inputs);
    hidden.add(this.bias_h);
    hidden.map(sigmoid);

    let output = Matrix.multiply(this.weights_ho, hidden);
    output.add(this.bias_o);
    output.map(sigmoid);

    return {
      output: output,
      hidden: hidden
    };
  }

  train(inputs_array, targets_array) {
    let outputs = this.feedforward(inputs_array);
    let targets = Matrix.fromArray(targets_array);

    // ERRORS = TARGETS - OUTPUTS
    let output_errors = Matrix.subtract(targets, outputs.output);

    // Delta weights HO
    let gradient_ho = Matrix.map(outputs.output, dsigmoid);
    gradient_ho.multiply(output_errors);
    gradient_ho.multiply(this.learning_rate);
    let delta_weights_ho = Matrix.multiply(
      gradient_ho,
      Matrix.transpose(outputs.hidden)
    );

    this.weights_ho.add(delta_weights_ho);
    this.bias_o.add(gradient_ho);

    // ---

    let hiden_errors = Matrix.multiply(
      Matrix.transpose(this.weights_ho),
      output_errors
    );

    // Delta weights IH
    let gradient_ih = Matrix.map(outputs.hidden, dsigmoid);
    gradient_ih.multiply(hiden_errors);
    gradient_ih.multiply(this.learning_rate);
    let delta_weights_ih = Matrix.multiply(
      gradient_ih,
      Matrix.transpose(Matrix.fromArray(targets_array))
    );

    this.weights_ih.add(delta_weights_ih);
    this.bias_h.add(gradient_ih);

    console.log('output:');
    outputs.output.print();

    console.log('hidden:');
    outputs.hidden.print();

    console.log('targets:');
    targets.print();

    console.log('output error:');
    output_errors.print();

    console.log('hidden error:');
    hiden_errors.print();
  }
}
