import { paddle } from './index.js';
import { canvas } from './index.js';

export class Controls {
    constructor() {
        this.leftPressed =  false,
        this.rightPressed = false
    }
    listen(keyDownHandler, keyUpHandler) {
        document.addEventListener("keydown", keyDownHandler, false);
        document.addEventListener("keyup", keyUpHandler, false);
    }
    keyDownHandler(e) {
        if(e.key == "Right" || e.key == "ArrowRight") {
            rightPressed = true;
        }
        else if(e.key == "Left" || e.key == "ArrowLeft") {
            leftPressed = true;
        }
    }
    keyUpHandler(e) {
        if(e.key == "Right" || e.key == "ArrowRight") {
            rightPressed = false;
        }
        else if(e.key == "Left" || e.key == "ArrowLeft") {
            leftPressed = false;
        }
    }
    move() {
        if(leftPressed && paddle.x > 0){
            paddle.x -= 5;
        }
        else if(rightPressed && paddle.x <= canvas.width - paddle.width){
            paddle.x +=5
        }
    } 
}