import {getInputDirection} from './input.js'

export const snakeSpeed = 5;

const snakeBody = [{x: 11, y:11}];

let newSegments = 0;

export function update(){
    addSegments();
    const inputDirection = getInputDirection()
    for(let i=snakeBody.length-2; i>=0; i--){
        snakeBody[i+1] = {...snakeBody[i]};
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard){
    snakeBody.forEach((segment) =>{
        const snakeEl = document.createElement('div');
        snakeEl.style.gridColumnStart = segment.x;
        snakeEl.style.gridRowStart = segment.y;
        snakeEl.classList.add('snake');
        gameBoard.appendChild(snakeEl);
    })
}

export function expandSnake(expantionRate){
    newSegments += expantionRate;
}

export function onSnake(position, {ignoreHead = false} = {}){
    return snakeBody.some((segment, index) =>{
        if(ignoreHead & index === 0) return false;
        return equalPosition(segment, position);
    });
}

export function getSnakeHead(){
    return snakeBody[0];
}

export function snakeIntersection(){
    return onSnake(snakeBody[0], {ignoreHead: true});
}

function equalPosition(pos1, pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y;   
}

function addSegments(){
    for(let i=0; i< newSegments; i++){
        snakeBody.push({...snakeBody[snakeBody.length-1] });
    }
    newSegments = 0;
}