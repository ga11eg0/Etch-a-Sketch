

// 1. select the element
const board = document.querySelector("#board");



//let h = 600/numSq

function gen_grid(numSq){
    let w = 100/numSq;
    for ( let i = 0; i < numSq*numSq; i++ ){
    // 2. create an element 
    const square = document.createElement("div");
    // adds ti to a class 
    square.classList.add("sq");
    //add style
    square.style.cssText = `width: ${w}%; height: auto; border: 2px solid gray; box-sizing:border-box; flex-shrink: 1;`;
    // 3. add new element to selected element 
    board.appendChild(square);
}
}

gen_grid(20)


// select the squares of the grid 
//const sqr = document.querySelectorAll(".sq");

function rem_grid(){
    const sq = document.querySelectorAll(".sq");
    sq.forEach((item) => {
        board.removeChild(item)
        item.classList.remove("sq")
    })
}
// this chnages the bg color of the squares the mouse hovers on
function change_bg(e){
    e.target.classList.add("new_sty")
    
}
// reset the color of all squares of the grid 
function reset(){
    const sq = document.querySelectorAll(".sq");
    sq.forEach((item) => {
        item.classList.remove("new_sty")
    })
}
// adds a event listener to each square 
function add_sqr_ev_listen(){
    const sq = document.querySelectorAll(".sq");
    sq.forEach((item) => {
    item.addEventListener("mouseover", change_bg)
})
}

add_sqr_ev_listen()

// select the clear button element
const clear_btn = document.querySelector("#clr_btn")
// adds event listener to the clear button 
clear_btn.addEventListener("click",reset)

// select the set size button 
const size_btn = document.querySelector("#size_btn")


// pop up windows
function pop_wind(){
    // create the pop up windows 
    const pop_up = document.createElement("div");
    pop_up.classList.add("pop");
    // adds pop up window to main screen 
    board.appendChild(pop_up);
    // create elements to be inside it, input element 
    const new_size = document.createElement("input");
    new_size.type = "number";
    new_size.placeholder = "Set the sqares per side"
    new_size.max = 100;
    new_size.classList.add("in")
    // add element to pop up window
    pop_up.appendChild(new_size);
    // create accept button 
    const ok_btn = document.createElement("button");
    ok_btn.textContent = "accept";
    ok_btn.classList.add("ok_btn");
    // add to pop up 
    pop_up.appendChild(ok_btn);

    ok_btn.addEventListener("click", () => { 
        let user_input = new_size.valueAsNumber;
        if ( user_input > 0 && user_input <= 100){
            rem_grid();
            gen_grid(user_input);
            add_sqr_ev_listen()
        }
        alert(user_input)
        pop_up.remove()})


} 

size_btn.addEventListener("click",pop_wind)
 