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