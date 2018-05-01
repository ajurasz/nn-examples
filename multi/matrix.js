class Matrix {
  constructor(rows, cols, values) {
    this.rows = rows;
    this.cols = cols;
    if (values) {
      this.values = values;
    } else {
      this.values = [];
      for (let i = 0; i < rows; i++) {
        this.values[i] = [];
        for (let j = 0; j < cols; j++) {
          this.values[i][j] = Math.floor(Math.random() * 10);
        }
      }
    }
  }

  print() {
    console.table(this.values);
  }

  size() {
    console.log('(' + this.rows + ' x ' + this.cols + ')');
  }

  add(n) {
    const m = new Matrix(this.rows, this.cols, this.values);
    if (n instanceof Matrix) {
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          m.values[i][j] += n.values[i][j];
        }
      }
    } else if (typeof n === 'number') {
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          m.values[i][j] += n;
        }
      }
    } else {
      throw new Error(typeof n + ' is not supported');
    }

    return m;
  }

  multiply(n) {
    if (n instanceof Matrix) {
      // matrix product
      if (this.cols !== n.rows) {
        throw new Error('Columns number is not equalt to rows number');
      }
      const m = new Matrix(this.rows, n.cols);

      for (let i = 0; i < m.rows; i++) {
        for (let j = 0; j < m.cols; j++) {
          let sum = 0;

          for (let x = 0; x < this.cols; x++) {
            sum += this.values[i][x] * n.values[x][j];
          }

          m.values[i][j] = sum;
        }
      }

      return m;
    } else if (typeof n === 'number') {
      // scalar product
      const m = new Matrix(this.rows, this.cols, this.values);
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          m.values[i][j] *= n;
        }
      }

      return m;
    } else {
      throw new Error(typeof n + ' is not supported');
    }
  }

  transpose() {
    const m = new Matrix(this.cols, this.rows);
    for (let i = 0; i < m.rows; i++) {
      for (let j = 0; j < m.cols; j++) {
        m.values[i][j] = this.values[j][i];
      }
    }

    return m;
  }
}
