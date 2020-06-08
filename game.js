import { ball } from './index.js'
export class Game {
    gameOver() {
        if(ball.y === canvas.height) {
            alert('gameOver');
        }
    }
}