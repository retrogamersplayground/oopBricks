import { canvas } from './index.js';
import { ctx } from './index.js'

export class Paddle {
    constructor() {
        this.x  = canvas.width/2 - 32.5
        this.y = canvas.height - 50;
        this.width = 65;
    }
    drawPaddle(){
        ctx.beginPath()
        ctx.fillStyle = "red"; 
        ctx.fillRect(this.x, this.y, this.width, 5);
        ctx.closePath()
    }
}