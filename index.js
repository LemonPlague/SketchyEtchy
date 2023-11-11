//------------------------grid------------------------
const container = document.querySelector('#gridContainer');

for (let i = 1; i < 5; i++) {
    let row = document.createElement('div');
    row.id = `row${i}`;
    row.setAttribute(`class`, `gridRows`);
    container.appendChild(row);
    for (let x = 1; x <5; x++) {
        let box = document.createElement('div')
        box.setAttribute(`class`, `rowBox`);
        row.appendChild(box);
    }
}

//--------div color changing stuff-------------
const divs = document.querySelectorAll('.rowBox');

divs.forEach((div) => div.addEventListener("mouseenter", (event) => {
    //change div color when hovering over
    event.target.style.backgroundColor = "red";
}));

//change color back when leaving
//divs.forEach((div) => div.addEventListener("mouseleave", (event) => {
//    event.target.style.backgroundColor = "";
//}));