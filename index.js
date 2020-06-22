export let canvas = document.getElementById('canvas');
export let ctx = canvas.getContext('2d');
export let randomColor = Math.floor(Math.random()*16777215).toString(16);
import { Ball } from './ball.js';
import { Paddle } from './paddle.js';
import { Block } from './block.js';
import { Game } from './game.js';
//import { Score } from './score.js';
let block1 = new Block(80, 40, Math.floor(Math.random()*16777215).toString(16));
let block2 = new Block(120, 40, Math.floor(Math.random()*16777215).toString(16));
let block3 = new Block(160, 40, Math.floor(Math.random()*16777215).toString(16));
let block4 = new Block(200, 40, Math.floor(Math.random()*16777215).toString(16));

let block5 = new Block(320, 40, Math.floor(Math.random()*16777215).toString(16));
let block6 = new Block(360, 40, Math.floor(Math.random()*16777215).toString(16));
let block7 = new Block(400, 40, Math.floor(Math.random()*16777215).toString(16));
let block8 = new Block(440, 40, Math.floor(Math.random()*16777215).toString(16));

let block9 = new Block(560, 40, Math.floor(Math.random()*16777215).toString(16));
let block10 = new Block(600, 40, Math.floor(Math.random()*16777215).toString(16));
let block11 = new Block(640, 40, Math.floor(Math.random()*16777215).toString(16));
let block12 = new Block(680, 40, Math.floor(Math.random()*16777215).toString(16));

// row 2
let block13 = new Block(200, 120, Math.floor(Math.random()*16777215).toString(16));
let block14 = new Block(240, 120, Math.floor(Math.random()*16777215).toString(16));
let block15 = new Block(280, 120, Math.floor(Math.random()*16777215).toString(16));
let block16 = new Block(320, 120, Math.floor(Math.random()*16777215).toString(16));

let block17 = new Block(440, 120, Math.floor(Math.random()*16777215).toString(16));
let block18 = new Block(480, 120, Math.floor(Math.random()*16777215).toString(16));
let block19 = new Block(520, 120, Math.floor(Math.random()*16777215).toString(16));
let block20 = new Block(560, 120, Math.floor(Math.random()*16777215).toString(16));

//row three
let block21 = new Block(80, 200, Math.floor(Math.random()*16777215).toString(16));
let block22 = new Block(120, 200, Math.floor(Math.random()*16777215).toString(16));
let block23 = new Block(160, 200, Math.floor(Math.random()*16777215).toString(16));
let block24 = new Block(200, 200, Math.floor(Math.random()*16777215).toString(16));

let block25 = new Block(320, 200, Math.floor(Math.random()*16777215).toString(16));
let block26 = new Block(360, 200, Math.floor(Math.random()*16777215).toString(16));
let block27 = new Block(400, 200, Math.floor(Math.random()*16777215).toString(16));
let block28 = new Block(440, 200, Math.floor(Math.random()*16777215).toString(16));

let block29 = new Block(560, 200, Math.floor(Math.random()*16777215).toString(16));
let block30 = new Block(600, 200, Math.floor(Math.random()*16777215).toString(16));
let block31 = new Block(640, 200, Math.floor(Math.random()*16777215).toString(16));
let block32 = new Block(680, 200, Math.floor(Math.random()*16777215).toString(16));

export let ball = new Ball();
export let paddle = new Paddle();

let game = new Game();
//let score = new Score();

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
    block1.drawBlock();
    block2.drawBlock();
    block3.drawBlock();
    block4.drawBlock();

    block5.drawBlock();
    block6.drawBlock();
    block7.drawBlock();
    block8.drawBlock();
    
    block9.drawBlock();
    block10.drawBlock();
    block11.drawBlock();
    block12.drawBlock();
    //row two
    block13.drawBlock();
    block14.drawBlock();
    block15.drawBlock();
    block16.drawBlock();

    block17.drawBlock();
    block18.drawBlock();
    block19.drawBlock();
    block20.drawBlock();
    //row three
    block21.drawBlock();
    block22.drawBlock();
    block23.drawBlock();
    block24.drawBlock();

    block25.drawBlock();
    block26.drawBlock();
    block27.drawBlock();
    block28.drawBlock();
    
    block29.drawBlock();
    block30.drawBlock();
    block31.drawBlock();
    block32.drawBlock();
    //score.updateScore();
    //score.printScore();

    if(leftPressed && paddle.x > 0){
        paddle.x -= 5;
    }
    else if(rightPressed && paddle.x <= canvas.width - paddle.width){
        paddle.x +=5
    }

    requestAnimationFrame(draw);
}

requestAnimationFrame(draw);


