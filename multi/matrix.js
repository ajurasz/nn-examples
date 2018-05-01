class Matrix {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.values = Array(rows)
      .fill()
      .map(() => Array(cols).fill(0));
  }

  map(fn) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.values[i][j] = fn(this.values[i][j], i, j);
      }
    }
  }

  randomize() {
    this.map(_ => Math.floor(Math.random() * 10));
  }
  size() {
    console.log('(' + this.rows + ' x ' + this.cols + ')');
  }

  print() {
    console.table(this.values);
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

  add(n) {
    if (n instanceof Matrix) {
      this.map(value, i, j => value + n.values[i][j]);
    } else if (typeof n === 'number') {
      this.map(value => value + n);
    } else {
      throw new Error(typeof n + ' is not supported');
    }
  }

  multiply(n) {
    if (typeof n === 'number') {
      // scalar product
      this.map(value => value * n);
    } else {
      throw new Error(typeof n + ' is not supported');
    }
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
}
