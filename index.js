//------------------------grid------------------------
const container = document.getElementById('gridContainer');

for (let i = 1; i < 5; i++) {
    let row = document.createElement('div');
    row.id = `row${i}`;
    row.class = `gridRows`;
    document.container.appendChild(row);
    for (let x = 1; x <5; x++) {
        let box = document.createElement('div')
        box.class = `rowBox`;
        document.row.appendChild(box);
    }
}