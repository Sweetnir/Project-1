const gameBoard = document.querySelector('#board')
const stuffDisplay = document.querySelector('#stuff')

const emptyBoxes = [
"", "", "", "", "", "", "", "", ""
]

//text at the bottom of board
let WhosTurn = "circle"
stuffDisplay.textContent = "circle goes first"

function createBoard(){
    emptyBoxes.forEach((boxes, index) => {
       const boxElement = document.createElement('div')
       boxElement.classList.add('box')
       boxElement.id = index
       boxElement.addEventListener('click', placePiece)
       gameBoard.append(boxElement)
    })
}
createBoard()


// adding cirlce or X
function placePiece(e){
      const goDisplay = document.createElement('div')
      goDisplay.classList.add(WhosTurn)
      e.target.append(goDisplay)
      WhosTurn = WhosTurn === "circle" ? "X" : "circle"
      stuffDisplay.textContent = " ITS " + WhosTurn + "'s TURN NOW "
      e.target.removeEventListener('click', placePiece)
}

//check score
function score() {
    const allBoxes = document.querySelectorAll('box')
    const winningPossibilties = [
        [0,1,2],[0,3,6],[0,4,8],
        [1,4,7],[3,4,5],[2,5,8],
        [8,7,6],[2,4,6]
    ]

    }



