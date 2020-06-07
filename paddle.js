import { canvas } from './index.js';
import { ctx } from './index.js'

export class Paddle {
    constructor() {
        this.x  = canvas.width/2 - 32.5
        this.y = canvas.height - 30;
        this.width = 80;
    }
    drawPaddle(){
        ctx.beginPath()
        ctx.fillStyle = "red"; 
        ctx.fillRect(this.x, this.y, 65, 5);
        ctx.closePath()
    }
}