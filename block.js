import { ctx } from './index.js';

export class Block {
    constructor(x, y, color) {
        this.x = x,
        this.y = y,
        this.width = 40,
        this.height = 40,
        this.color = color
    }
    drawBlock() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "#" + this.color;
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "white";
        ctx.stroke();
        ctx.closePath();
    }
}

let block1 = new Block(80, 40, Math.floor(Math.random()*16777215).toString(16));
let block2 = new Block(120, 40, Math.floor(Math.random()*16777215).toString(16));
let block3 = new Block(160, 40, Math.floor(Math.random()*16777215).toString(16));
let block4 = new Block(200, 40, Math.floor(Math.random()*16777215).toString(16));

let block5 = new Block(320, 40, Math.floor(Math.random()*16777215).toString(16));
let block6 = new Block(360, 40, Math.floor(Math.random()*16777215).toString(16));
let block7 = new Block(400, 40, Math.floor(Math.random()*16777215).toString(16));
let block8 = new Block(440, 40, Math.floor(Math.random()*16777215).toString(16));

let block9 = new Block(560, 40, Math.floor(Math.random()*16777215).toString(16));
let block10 = new Block(600, 40, Math.floor(Math.random()*16777215).toString(16));
let block11 = new Block(640, 40, Math.floor(Math.random()*16777215).toString(16));
let block12 = new Block(680, 40, Math.floor(Math.random()*16777215).toString(16));

// row 2
let block13 = new Block(200, 120, Math.floor(Math.random()*16777215).toString(16));
let block14 = new Block(240, 120, Math.floor(Math.random()*16777215).toString(16));
let block15 = new Block(280, 120, Math.floor(Math.random()*16777215).toString(16));
let block16 = new Block(320, 120, Math.floor(Math.random()*16777215).toString(16));

let block17 = new Block(440, 120, Math.floor(Math.random()*16777215).toString(16));
let block18 = new Block(480, 120, Math.floor(Math.random()*16777215).toString(16));
let block19 = new Block(520, 120, Math.floor(Math.random()*16777215).toString(16));
let block20 = new Block(560, 120, Math.floor(Math.random()*16777215).toString(16));

//row three
let block21 = new Block(80, 200, Math.floor(Math.random()*16777215).toString(16));
let block22 = new Block(120, 200, Math.floor(Math.random()*16777215).toString(16));
let block23 = new Block(160, 200, Math.floor(Math.random()*16777215).toString(16));
let block24 = new Block(200, 200, Math.floor(Math.random()*16777215).toString(16));

let block25 = new Block(320, 200, Math.floor(Math.random()*16777215).toString(16));
let block26 = new Block(360, 200, Math.floor(Math.random()*16777215).toString(16));
let block27 = new Block(400, 200, Math.floor(Math.random()*16777215).toString(16));
let block28 = new Block(440, 200, Math.floor(Math.random()*16777215).toString(16));

let block29 = new Block(560, 200, Math.floor(Math.random()*16777215).toString(16));
let block30 = new Block(600, 200, Math.floor(Math.random()*16777215).toString(16));
let block31 = new Block(640, 200, Math.floor(Math.random()*16777215).toString(16));
let block32 = new Block(680, 200, Math.floor(Math.random()*16777215).toString(16));

export let blocks = [block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18, block19, block20, block21, block22, block23, block24, block25, block26, block27, block28, block29, block30, block31, block32];