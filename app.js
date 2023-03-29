const gameBoard = document.querySelector('#board')
const stuffDisplay = document.querySelector('#stuff')

const emptyBoxes = [
"", "", "", "", "", "", "", "", ""
]

function createBoard(){
    emptyBoxes.forEach((boxes, index) => {
       const boxElement = document.createElement('div')
       boxElement.classList.add('sqaure')
       gameBoard.append(boxElement)
    })
}
createBoard()