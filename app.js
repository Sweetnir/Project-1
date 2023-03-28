// insert images
function insertImage() {

    document.querySelectorAll('.box').forEach(image => {

        if (image.innerText.length !== 0) {
            if (image.innerText === 'Bpawn' || image.innerText === 'Wpawn') {
                image.innerHTML = `${image.innerText} <img class='allimg allpawn' src="${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'

            }

            else {

                image.innerHTML = `${image.innerText} <img class='allimg' src="${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
            }
        }
    })
}
insertImage()


// coloring boxes
function coloring() {
    const color = document.querySelectorAll('.box')

    color.forEach(color => {

        getId = color.id 
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        aup = eval(arr.shift())
        a = aside + aup

        if (a % 2 === 0){
            color.style.backgroundColor = 'rgb(111, 143, 175)'
        }
        if (a % 2 !== 0) {
            color.style.backgroundColor = 'rgb(137, 207, 240)'
        }
    })
} 
coloring()


function pinkGreen() {
    document.querySelectorAll('.box').forEach(i1 => {
        if (i1.style.backgroundColor === 'pink') {

            document.querySelectorAll('.box').forEach(i2 => {

                if (i2.style.backgroundColor === 'green' && i2.innerText.length !== 0) {


                    greenText = i2.innerText

                    pinkText = i1.innerText

                    pinkColor = ((Array.from(pinkText)).shift()).toString()
                    greenColor = ((Array.from(greenText)).shift()).toString()

                    getId = i2.id
                    arr = Array.from(getId)
                    arr.shift()
                    aside = eval(arr.pop())
                    aup = eval(arr.shift())
                    a = aside + aup
            
                    if (a % 2 == 0 && pinkColor === greenColor) {
                        i2.style.backgroundColor = 'rgb(111, 143, 175)'
                    }
                    if (a % 2 !== 0 && pinkColor === greenColor) {
                        i2.style.backgroundColor = 'rgb(137, 207, 240)'
                    }

                    
                }
            })
        }
    })
}

tog = 1

document.querySelectorAll('.box').forEach(item => {
    
    item.addEventListener('click', function () {
// delete opposite element
if (item.style.backgroundColor === 'green' && item.innerText.length === 0){
    tog = tog + 1
}
else if (item.style.backgroundColor === 'green' && item.innerText.length !== 0) {

    document.querySelectorAll('.box').forEach(i => {
        if (i.style.backgroundColor === 'pink'){
            pinkId = i.id
            pinkText = i.innerText

            document.getElementById(pinkId).innerText = ''
            item.innerText = pinkText
            coloring()
            insertImage()
            tog = tog + 1
        }

    })
}
    })
})

getId = item.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        arr.push('0')
        aup = eval(arr.join(''))
        a = aside + aup

        //All available paths for every piece
        function whosTurn(toggle){
            //Pawn Piece
        if(item.innerText === `${toggle}pawn`) {
            item.style.backgroundColor = 'pink'

            if(tog % 2 !== 0 && aup < 800){
                if(document.getElementById(`b${a + 100}`).innerText.length === 0){
                document.getElementById(`b${a + 100}`).style.backgroundColor = 'green'
                }
                if(aside < 8 && document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0 ){
     document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'green'    
                }

                if(aside > 1 && document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0 ) {
                    document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'green'   
                }
            }
        }
        }

        if (tog % 2 === 0 && aup > 100) {
            if(document.getElementById(`b${a - 100}`).innerText.length === 0){
                document.getElementById(`b${a - 100}`).style.backgroundColor = 'green'
            }
         if(aside < 8 && document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0){
            document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'green'
         }

         if(aside > 1 && document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0){
            document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'green'
         }

        }





        //Moving the Element
        document.querySelectorAll('.box').forEach(moveTest => {
            moveTest.addEventListener('click', function () {
                if (moveTest.style.backgroundColor === 'pink'){

                    pinkId = moveTest.id
                    pinkText = moveTest.innerText

                    document.querySelectorAll('.box').forEach(moveTest2 => {
                        moveTest2.addEventListener('click', function () {
                            if(moveTest2.style.backgroundColor === 'green' && 
                             moveTest2.innerText.length === 0){
                             document.getElementById(pinkId).innerText = ''
                             moveTest2.innerText = pinkId
                             coloring()
                             insertImage()
                            }
                        })
                    })
                }


                    
                })
            })
        

        //Whos Turn
        if (tog % 2 !== 0) {
            document.getElementById('tog').innerText = "White's Turn"
            whosTurn('W')
        }
         if(tog % 2 === 0) {
            document.getElementById('tog').innerText = "Black's Turn"
            whosTurn('B')
         }
   
         pinkGreen()