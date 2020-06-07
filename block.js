import { canvas } from './index.js';
import { ctx } from './index.js';
import { randomColor } from './index.js';

export class Block {
    constructor() {
        this.blockX = 0,
        this.blockY = 0,
        this.width = 40,
        this.height = 40,
        this.color = randomColor
    }
    drawBlock() {
        ctx.beginPath();
        ctx.rect(this.blockX, this.blockY, this.width, this.height);
        ctx.fillStyle = "#" + this.color;
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "white";
        ctx.stroke();
        ctx.closePath();
    }
}

