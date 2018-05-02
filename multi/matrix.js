class Matrix {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.values = Array(rows)
      .fill()
      .map(() => Array(cols).fill(0));
  }

  static fromArray(input_array) {
    const m = new Matrix(input_array.length, 1);
    m.map((_, i, j) => input_array[i]);
    return m;
  }

  toArray() {
    let array = [];
    this.map(value => array.push(value));
    return array;
  }

  map(fn) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.values[i][j] = fn(this.values[i][j], i, j);
      }
    }
  }

  randomize() {
    this.map(_ => Math.random() * 2 - 1);
  }
  size() {
    console.log('(' + this.rows + ' x ' + this.cols + ')');
  }

  print() {
    console.table(this.values);
  }

  add(n) {
    if (n instanceof Matrix) {
      this.map((value, i, j) => value + n.values[i][j]);
    } else if (typeof n === 'number') {
      this.map(value => value + n);
    } else {
      throw new Error(typeof n + ' is not supported');
    }
  }

  multiply(n) {
    if (n instanceof Matrix) {
      this.map((value, i, j) => value * n.values[(i, j)]);
    } else if (typeof n === 'number') {
      // scalar product
      this.map(value => value * n);
    } else {
      throw new Error(typeof n + ' is not supported');
    }
  }

  static transpose(m1) {
    const m = new Matrix(m1.cols, m1.rows);
    for (let i = 0; i < m.rows; i++) {
      for (let j = 0; j < m.cols; j++) {
        m.values[i][j] = m1.values[j][i];
      }
    }

    return m;
  }

  static map(m1, fn) {
    const m = new Matrix(m1.rows, m1.cols);
    for (let i = 0; i < m.rows; i++) {
      for (let j = 0; j < m.cols; j++) {
        m.values[i][j] = fn(m1.values[i][j], i, j);
      }
    }
    return m;
  }

  static multiply(m1, m2) {
    if (m1 instanceof Matrix && m2 instanceof Matrix) {
      // matrix product
      if (m1.cols !== m2.rows) {
        throw new Error('Columns number is not equalt to rows number');
      }
      const m = new Matrix(m1.rows, m2.cols);
      for (let i = 0; i < m.rows; i++) {
        for (let j = 0; j < m.cols; j++) {
          let sum = 0;

          for (let x = 0; x < m1.cols; x++) {
            sum += m1.values[i][x] * m2.values[x][j];
          }

          m.values[i][j] = sum;
        }
      }

      return m;
    } else {
      throw new Error(
        typeof m1 + ' and ' + typeof m2 + ' needs to be of Matrix type'
      );
    }
  }

  static subtract(m1, m2) {
    if (m1 instanceof Matrix && m2 instanceof Matrix) {
      if (m1.cols !== m2.cols || m1.rows !== m2.rows) {
        throw new Error('Matrices are not the same dimensions');
      }
      const m = new Matrix(m1.rows, m1.cols);
      for (let i = 0; i < m.rows; i++) {
        for (let j = 0; j < m.cols; j++) {
          m.values[i][j] = m1.values[i][j] - m2.values[i][j];
        }
      }

      return m;
    } else {
      throw new Error(
        typeof m1 + ' and ' + typeof m2 + ' needs to be of Matrix type'
      );
    }
  }
}
