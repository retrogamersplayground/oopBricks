import { canvas } from './index.js';
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

