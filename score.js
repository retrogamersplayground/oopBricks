import { ctx } from './index.js';
import { ball } from './index.js';
import { blocks } from './block.js';
export class Score {
    constructor() {
        this.score = 0;
    }
    updateScore() {
        blocks.forEach(block => {if(ball.x === block.x) {
            this.score = this.score + 1;
            blocks.pop();
        }})
    }
    printScore() {
        ctx.font = '30px Verdana';
        ctx.fillText('Score: ' + this.score, 10, canvas.height - 10);
    }
}