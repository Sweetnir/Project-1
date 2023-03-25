function coloring() {
    const color = document.querySelectorAll('.square')

    color.forEach(color => {

        getID = color.id 
        arr = Array.from(getID)
        arr.shift()
        aside = eval(arr.pop())
        aup = eval(arr.shift())
        a = aside + aup

        if (a % 2 === 0){
            color.style.backgroundColor = 'rgb(240, 201, 150)'
        }
        if (a % 2 !== 0) {
            color.style.backgroundColor = 'rgb(100, 75, 43)'
        }
    })
} 
coloring()
