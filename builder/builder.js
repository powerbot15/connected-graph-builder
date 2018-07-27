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
    this.buildVertices();
    this.connectVertices();
  }

  initCenter () {
    this.center.x = this.canvas.width / 2;
    this.center.y = this.canvas.height / 2;
  }

  initStartVertexCoords () {
    this.startVertex.x = this.center.x;
    this.startVertex.y = this.center.y - 200;
    this.vertices.push(new Vertex(this.startVertex, this.context));
  }

  initRotateRad () {
    this.rotateRad = (360 / this.matrix.length) * RAD;
    this.rotateSumRAD = this.rotateRad;
  }

  buildVertices () {
    for (let i = 0; i < this.matrix.length; i++){
      this.rotateVertex();
      this.vertices.push(new Vertex({x : this.startVertex.x, y : this.startVertex.y}, this.context));
    }
  }

  rotateVertex () {
    const startX = this.startVertex.x;
    const startY = this.startVertex.y;
    const rotateCos = Math.cos(this.rotateRad);
    const rotateSin = Math.sin(this.rotateRad);
    this.startVertex.x = (startX - this.center.x) * rotateCos - (startY - this.center.y) * rotateSin + this.center.x;
    this.startVertex.y = (startY - this.center.y) * rotateCos + (startX - this.center.x) * rotateSin + this.center.y;
    console.dir(this.startVertex.x);
  }

  connectVertices () {
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix[i].length; j++) {
        if (i === j) {
          continue;
        }
        if (this.matrix[i][j] === 1) {
          this.connectPair (i, j);
        }
      }
    }
  }

  connectPair (startVertexIndex, endVertexIndex) {
    this.context.beginPath();
    this.context.moveTo(this.vertices[startVertexIndex].x, this.vertices[startVertexIndex].y);
    this.context.lineTo(this.vertices[endVertexIndex].x, this.vertices[endVertexIndex].y);
    this.context.stroke();
  }
}

class Vertex {

  constructor (coords, context) {
    this.x = coords.x;
    this.y = coords.y;
    this.ctx = context;
    this.draw();
  }

  draw () {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 20, 0, RAD_2PI);
    this.ctx.stroke();
  }

}