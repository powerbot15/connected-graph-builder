import {Builder} from './builder'

let canvas = document.querySelector('canvas');
let builder = new Builder([
  [0, 0, 1, 1, 1],
  [0, 0, 1, 1, 1],
  [1, 1, 0, 1, 1],
  [1, 1, 1, 0, 0],
  [1, 1, 1, 0, 0],
], canvas);