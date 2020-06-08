import { ball } from './index.js'
import { block } from './index.js'

export class Score {
    constructor() {
        this.score = 0;
    }
    updateScore() {
        if(ball.y + ball.ballRadius === block.blockY + block.height) {
            this.score = this.score + 1;
            console.log(this.score);
        }
    }
}