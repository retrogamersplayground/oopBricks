import { canvas } from './index.js';
import { ctx } from './index.js';
import { randomColor } from './index.js';

export class Block {
    constructor() {;
        this.blockY = 0,
        this.width = 40,
        this.height = 40
        this.color = Math.floor(Math.random()*16777215).toString(16);
    }
    drawBlock(x) {
        ctx.beginPath();
        ctx.rect(x, this.blockY, this.width, this.height);
        ctx.fillStyle = "#" + this.color;
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "white";
        ctx.stroke();
        ctx.closePath();
    }
    blockLoop(x) {
        x = 0;
        for(let i = 0; i < canvas.width; i++) {
            this.drawBlock(x);
            x = x + 40;
            this.color = Math.floor(Math.random()*16777215).toString(16);
        }
    }
}

