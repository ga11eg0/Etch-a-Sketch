
// 1. select the element
const board = document.querySelector("#board");



for ( let i = 0; i < 16*16; i++ ){
    // 2. create an element 
    const square = document.createElement("sq")
    // adds ti to a class 
    square.classList.add("cell")
    //add style
    square.style.cssText = "width: 16px; height: 16px; border: 2px solid gray; "
    // 3. add new element to selected element 
    board.appendChild(square)
}





