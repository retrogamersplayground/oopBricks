export let canvas = document.getElementById('canvas');
export let ctx = canvas.getContext('2d');
import { Ball } from './ball.js';
import { Paddle } from './paddle.js';
import { blocks } from './block.js';
import { Game } from './game.js';
import { Score } from './score.js';

export let ball = new Ball();
export let paddle = new Paddle();

let game = new Game();
let score = new Score();

//paddle controls

let leftPressed =  false;
let rightPressed = false;
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

function draw(){
    ctx.clearRect(0, 0, canvas.width , canvas.height)
    ball.drawBall();
    ball.bounce();
    game.gameOver();
    paddle.drawPaddle();
    blocks.forEach(block => block.drawBlock())
    score.updateScore();
    score.printScore();
    
    if(leftPressed && paddle.x > 0){
        paddle.x -= 5;
    }
    else if(rightPressed && paddle.x <= canvas.width - paddle.width){
        paddle.x +=5
    }

    requestAnimationFrame(draw);
}

requestAnimationFrame(draw);


