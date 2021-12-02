import {onSnake, expandSnake} from './snake.js'
import {randomLocation} from './grid.js'

let food = getRandomFoodPosition();

const expansionRate = 1;

export function update(){
    if(onSnake(food)){
        expandSnake(expansionRate);
        food = getRandomFoodPosition();
        
    }

}
export function draw(gameBoard){
    const foodEl = document.createElement('div');
    foodEl.style.gridColumnStart = food.x;
    foodEl.style.gridRowStart = food.y;
    foodEl.classList.add('food');
    gameBoard.appendChild(foodEl);
}

function getRandomFoodPosition(){
    let newFoodPosition;
    while(newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomLocation();
    }
    return newFoodPosition;
}