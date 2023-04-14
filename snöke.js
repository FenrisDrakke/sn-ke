import { getInputDirection } from "./input.js"

export const snökeSpeed = 1
const snökeBody = [{ x: 11, y: 11 }]
let newSegment = 0

export function update() {
    addSegments()
    const inputDirection = getInputDirection()
    for (let i = snökeBody.length - 2; i >= 0; i--) {
        snökeBody[i + 1] = { ...snökeBody[i] }
    }

    snökeBody[0].x += inputDirection.x
    snökeBody[0].y += inputDirection.y
}

export function draw() {
    snökeBody.forEach(segment => {
        const snökeElement = document.createElement('div')
        snökeElement.style.gridRowStart = segment.y
        snökeElement.style.gridColumnStart = segment.x
        snökeElement.classList.add('snöke')
        gameBoard.appendChild(snökeElement)
    })
}

export function expandSnöke(amount) {
    newSegment += amount
}
export function onSnöke(position) {
    return snökeBody.some(segment => {
        return equalPositions(segment, position)
    })
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() {
    for (let i = 0; i < newSegment; i++) {
        snökeBody.push({...snökeBody[snökeBody.length - 1]
        })
    }
    newSegment = 0
}