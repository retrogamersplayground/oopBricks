export let canvas = document.getElementById('canvas');
export let ctx = canvas.getContext('2d');
export let randomColor = Math.floor(Math.random()*16777215).toString(16);

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
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

import {Ball} from './ball.js';
import {Paddle} from './paddle.js';
import { Block } from './block.js';
import { Controls } from './controls.js';
import { Game } from './game.js';
export let ball = new Ball();
export let paddle = new Paddle();
let block = new Block();
let controls = new Controls();
let game = new Game();

function draw(){
    ctx.clearRect(0, 0, canvas.width , canvas.height)
    ball.drawBall();
    ball.bounce();
    game.gameOver();
    paddle.drawPaddle();
    block.blockLoop();

    if(leftPressed && paddle.x > 0){
        paddle.x -= 5;
    }
    else if(rightPressed && paddle.x <= canvas.width - paddle.width){
        paddle.x +=5
    }

    requestAnimationFrame(draw);
}

requestAnimationFrame(draw);


