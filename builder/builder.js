let RAD_2PI = Math.PI * 2;
let RAD = Math.PI / 180;

export class Builder {

  constructor (matrix, canvas) {
    this.vertices = [];
    this.matrix = matrix;
    this.canvas = canvas;
    this.center = {
      x : 0,
      y : 0
    };
    this.startVertex = {
      x : 0,
      y : 0
    };
    this.rotateSumRAD = 0;
    this.initCanvas();
    this.build();
  }

  initCanvas () {
    this.context = this.canvas.getContext('2d');
  }

  build () {
    this.initCenter();
    this.initStartVertexCoords();
    this.initRotateRad();
  }

  initCenter () {
    this.center.x = this.canvas.width / 2;
    this.center.y = this.canvas.height / 2;
  }

  initStartVertexCoords () {
    this.startVertex.x = this.center.x - 200;
    this.startVertex.y = this.center.y;
    this.vertices.push(new Vertex(this.startVertex, this.context));
  }

  initRotateRad () {
    this.rotateRad = (360 / this.matrix.length) * RAD;
    this.rotateSumRAD = this.rotateRad;
  }

  buildVertices () {
    for (let i = 0; i < this.matrix.length; i++){
      this.vertices.push();
    }
  }
}

class Vertex {

  constructor (coords, context) {
    this.x = coords.x;
    this.y = coords.y;
    this.ctx = context;
  }

  draw () {
    this.ctx.arc(this.x, this.y, 20, 0, RAD_2PI);
  }

}