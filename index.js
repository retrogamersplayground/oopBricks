export let canvas = document.getElementById('canvas');
export let ctx = canvas.getContext('2d');
export let randomColor = Math.floor(Math.random()*16777215).toString(16);

import {Ball} from './ball.js';
import {Paddle} from './paddle.js';
import { Block } from './block.js';

let ball = new Ball();
let paddle = new Paddle();
let block = new Block();

function draw(){
    ctx.clearRect(0, 0, canvas.width , canvas.height)
    ball.drawBall();
    paddle.drawPaddle();
    block.drawBlock();
    requestAnimationFrame(draw);
}

requestAnimationFrame(draw);


