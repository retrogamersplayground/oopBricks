import { ctx } from './index.js';
import { ball } from './index.js';
import { block } from './index.js';

export class Score {
    constructor() {
        this.score = 0;
    }
    updateScore() {
        if(ball.y + ball.ballRadius === block.blockY + block.height) {
            this.score = this.score + 1;
        }
    }
    printScore() {
        ctx.font = '30px Verdana';
        ctx.fillText('Score: ' + this.score, 10, canvas.height - 10);
    }
}