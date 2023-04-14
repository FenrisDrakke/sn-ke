import { onSnöke, expandSnöke } from "./snöke.js"
import { randomGridPosition } from "./grid.js"

let food = getRandomFoodPosition()
const expantionRate = 1

export function update() {
    if (onSnöke(food)){
        expandSnöke(expantionRate)
        food = getRandomFoodPosition()
    }
   
}

export function draw() {
        const foodElement = document.createElement('div')
        snökeElement.style.gridRowStart = food.y
        snökeElement.style.gridColumnStart = food.x
        snökeElement.classList.add('food')
        gameBoard.appendChild(foodElement)
    }

    function getRandomFoodPosition(){
        let newFoodPosition
        while (newFoodPosition == null || onSnöke(newFoodPosition)) {
           newFoodPosition = randomGridPosition() 
        }
        return newFoodPosition
    }
 