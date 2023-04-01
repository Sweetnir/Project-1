const gameBoard = document.querySelector('#board')
const stuffDisplay = document.querySelector('#stuff')

const emptyBoxes = [
"", "", "", "", "", "", "", "", ""
]

let WhosTurn = "circle"
stuffDisplay.textContent = "circle goes first"

function createBoard(){
    emptyBoxes.forEach((boxes, index) => {
       const boxElement = document.createElement('div')
       boxElement.classList.add('square')
       boxElement.id = index
       boxElement.addEventListener('click', placePiece)
       gameBoard.append(boxElement)
    })
}
createBoard()



function placePiece(e){
      const goDisplay = document.createElement('div')
      goDisplay.classList.add(WhosTurn)
      e.target.append(goDisplay)
      WhosTurn = WhosTurn === "circle" ? "X" : "circle"
      stuffDisplay.textContent = " ITS " + WhosTurn + "'s TURN NOW "
      e.target.removeEventListener('click', placePiece)
}


