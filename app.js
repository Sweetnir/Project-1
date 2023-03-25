



// insert images
function insertImage() {

    document.querySelectorAll('.box').forEach(image => {

        if (image.innerText.length !== 0) {
            if (image.innerText == 'Bpawn' || image.innerText == 'Wpawn') {
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

        getID = color.id 
        arr = Array.from(getID)
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
