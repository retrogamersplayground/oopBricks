import { canvas } from './index.js';
import { ctx } from './index.js';
export class Ball {
    constructor() {
        this.x = canvas.width/2;
        this.y = canvas.height/2;
        this.ballRadius = 10;
    }
    drawBall() {
        ctx.beginPath();
        ctx.arc(this.x , this.y , this.ballRadius , 0 , Math.PI * 2 );
        ctx.fillStyle = 'white'; 
        ctx.fill();
        ctx.closePath();
        console.log(this.ballRadius);
    }
}