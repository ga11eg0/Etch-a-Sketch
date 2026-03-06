
// 1. select the element
const board = document.querySelector("#board");


let w = 100/16
let h = 600/16
for ( let i = 0; i < 16*16; i++ ){
    // 2. create an element 
    const square = document.createElement("sq")
    // adds ti to a class 
    square.classList.add("cell")
    //add style
    square.style.cssText = `width: ${w}%; height: ${h}px; border: 2px solid gray; box-sizing:border-box; flex-shrink: 1;`
    // 3. add new element to selected element 
    board.appendChild(square)
}





