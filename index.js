//------------------------grid------------------------
const container = document.querySelector('#gridContainer');
const button = document.getElementById('cellCount');
let userInput = 4;

SetPage();

function SetPage() {
    //populate the page with a grid
    for (let i = 0; i < userInput; i++) {
        let row = document.createElement('div');
        row.id = `row${i}`;
        row.setAttribute(`class`, `gridRows`);
        container.appendChild(row);
        for (let x = 0; x < userInput; x++) {
            let box = document.createElement('div')
            box.setAttribute(`class`, `rowBox`);
            row.appendChild(box);
        }
    }
    //--------div color changing stuff-----------------
    const divs = document.querySelectorAll('.rowBox');

    divs.forEach((div) => div.addEventListener("mouseenter", (event) => {
        //change div color when hovering over
        event.target.style.backgroundColor = "red";
}));
}


//allow user to create a grid size of their choice
button.addEventListener("click", () => {
    //get a prompt from user for a new grid size
    do {
        let userPrompt = prompt("How many rows do you want? ( 1 ~ 10 )");
        userInput = parseInt(userPrompt);
    } while (userInput < 1 || userInput > 10);

    //scrub page before creating new grid
    const rows = document.querySelectorAll('.gridRows');
    rows.forEach((row) => row.remove());

    //create a new grid based on user's input
    SetPage();
});