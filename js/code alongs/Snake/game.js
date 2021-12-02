import * as snake from './snake.js'
import * as food from './food.js'
import {outsideGrid} from './grid.js'

const gameBoard = document.querySelector('.game-board');
let lastRenderTime = 0;
let gameOver = false;

function main(currentTime){

    if(gameOver){
        if(confirm("You lost. press ok to restart"))
            window.location = './';
        return;
    }

    //render new animation
    window.requestAnimationFrame(main);

    /* updates the animation according to the snake speed.
    it will display a new location for the snake according to 
    snake speed -> update snake 2 time a second*/
    const secondsSinceLastRander = (currentTime - lastRenderTime) / 1000;
    if(secondsSinceLastRander < 1/snake.snakeSpeed) return;
    lastRenderTime = currentTime;

    update();
    draw();
}

//first call to function -> starts the fame
window.requestAnimationFrame(main);

function update(){
    snake.update();
    food.update();
    checkEndGame();
}

function draw(){
    gameBoard.innerHTML = '';
    snake.draw(gameBoard);
    food.draw(gameBoard);
}

function checkEndGame(){
    // gameOver = outsideGrid(snake.getSnakeHead());
    gameOver = outsideGrid(snake.getSnakeHead()) || snake.snakeIntersection();
}