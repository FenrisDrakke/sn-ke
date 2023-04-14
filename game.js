import {update as updateSnöke, draw as drawSnöke ,snökeSpeed } from "./snöke.js"
import {update as updateFood, draw as drawFood } from './food.js'

let lastRenderTime = 0
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
    window.requestAnimationFrame(main)
    const sencondsSinceLastRender = (currentTime - lastRenderTime) /1000
    if (sencondsSinceLastRender < 1 / snökeSpeed) return

    lastRenderTime = currentTime
    console.log(currentTime)

    update()
    draw()
}

window.requestAnimationFrame(main)

function update(){
    updateSnöke()
    updateFood()
}

function draw(){
    gameBoard.innerHTML= ''
    drawSnöke(gameBoard)
    drawFood(gameBoard)
}