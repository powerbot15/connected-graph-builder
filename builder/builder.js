export class Builder {

  constructor (matrix, canvas) {
    this.matrix = matrix;
    this.canvas = canvas;
    this.initCanvas();
    this.build();
  }

  initCanvas () {
    this.context = this.canvas.getContext('2d');
  }

  build () {

  }

}