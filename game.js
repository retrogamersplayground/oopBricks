import { canvas } from './index.js';
import { ctx } from './index.js'
import { ball } from './index.js'

export class Game {
    gameOver() {
        if(ball.y >= canvas.height) {
                ctx.font = '100px Verdana';
                ctx.fillText('GAME OVER', 100, canvas.height/2);
        }
    }
}
