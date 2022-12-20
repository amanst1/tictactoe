let lastTurn = ""
let boxes = [1,2,3,4,5,6,7,8,9]
let boxesValues = new Array(9).fill("")
let moveCounter = 0
let winner = ""
let containerDiv = document.querySelector(".container")

let boxesHtml = boxes.map((box) => {
    return `<div class="box"  id=${box} onclick="clicked(${box})" >
               
            </div>`
})

//removes commas from array
containerDiv.innerHTML = boxesHtml.join("")

//handles click by user on individual boxes
function clicked(id) {
    if(lastTurn === "" || lastTurn === "O"){
        lastTurn = "X" 
        boxesValues[id-1] = "X"
        moveCounter++
        boxesHtml[id-1] = `<div class="box"  id=${id}>
                ${lastTurn}
            </div>` 
    } else {
        lastTurn = "O"
        boxesValues[id-1] = "O"
        moveCounter++
        boxesHtml[id-1] = `<div class="box"  id=${id}>
                ${lastTurn}
            </div>` 
    }
    
    containerDiv.innerHTML = boxesHtml.join("")
    winCondition()
}

//updates ui if the game has a winner
function updateVals() {
    winner = lastTurn
    containerDiv.innerHTML = `<h1>${winner === "X"? "Player 1 Wins": "Player 2 Wins"} </h1> `
}

//checks existence of a winner after every move 
function winCondition() {
    if(boxesValues[0] !== "" && boxesValues[0] === boxesValues[1] && boxesValues[1] === boxesValues[2]){
        updateVals()
    } else if (boxesValues[3] !== "" && boxesValues[3] === boxesValues[4] && boxesValues[4] === boxesValues[5]) {
        updateVals()
    } else if (boxesValues[6] !== "" && boxesValues[6] === boxesValues[7] && boxesValues[7] === boxesValues[8]){
        updateVals()
    } else if (boxesValues[0] !== "" && boxesValues[0] === boxesValues[3] && boxesValues[3] === boxesValues[6]){
        updateVals()
    } else if (boxesValues[1] !== "" && boxesValues[1] === boxesValues[4] && boxesValues[4] === boxesValues[7]){
        updateVals()
    } else if (boxesValues[2] !== "" && boxesValues[2] === boxesValues[5] && boxesValues[5] === boxesValues[8]){
        updateVals()
    } else if(boxesValues[0] !== "" && boxesValues[0] === boxesValues[4] && boxesValues[4] === boxesValues[8]){
        updateVals()
    } else if (boxesValues[2] !== "" && boxesValues[2] === boxesValues[4] && boxesValues[4] === boxesValues[6]){
        updateVals()
    } else if (moveCounter === 9) {
        moveCounter = 0
        containerDiv.innerHTML = `<h1>DRAW</h1> `
    }
    
}



//function endGame() {
 //   containerDiv.innerHTML =  `<h1>Playe</h1>` 
//}

// 0 1 2
// 3 4 5
// 6 7 8

//[0,1,2]
// [3,4,5],
// [6,7,8] ,
// [0,3,6] 
//[1,4,7] 
//[2,5,8] 
//[0,4,8],
// [2,4,6]
