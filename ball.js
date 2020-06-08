import { canvas } from './index.js';
import { ctx } from './index.js';
import { paddle } from './index.js'
export class Ball {
    constructor() {
        this.x = canvas.width/2;
        this.y = canvas.height/2;
        this.ballRadius = 10;
        this.dy = +1;
        this.dx = 0;
    }
    drawBall() {
        ctx.beginPath();
        ctx.arc(this.x , this.y , this.ballRadius , 0 , Math.PI * 2 );
        ctx.fillStyle = 'white'; 
        ctx.fill();
        ctx.closePath();
    }
    bounce() {
        if(this.y + this.ballRadius === paddle.y && this.x > paddle.x && this.x < (paddle.x + 32.5)) {
            this.dy -= 1;
            this.dx -= .5;
        } else if(this.y + this.ballRadius === paddle.y && this.x > paddle.x && this.x < (paddle.x + 65) && this.x >= (paddle.x + 32.5)) {
            this.dy -= 1;
            this.dx += .5;
        } else if(this.y - this.ballRadius === canvas.height - 600) {
            this.dy += 1;
        } else if(this.x + this.dx > canvas.width - this.ballRadius || this.x + this.dx < this.ballRadius) {
            this.dx = -this.dx;
        }
        this.y += this.dy
        this.x += this.dx
    }

}