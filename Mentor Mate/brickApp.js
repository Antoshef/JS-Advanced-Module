// class Table {
//     constructor() {
//         this.inputArray = [];
//         this.inputTable = '';
//     }

//     get inputArrayValue() {
//         return this.inputArray;
//     }

//     static validateInput() {
//         let newInputArray = [];
//         let tableHeight = document.getElementById('height');
//         let tableWidth = document.getElementById('width');
//         inputTable.innerHTML = '';

//         // Validate table width and height
//         if ((tableHeight.value % 2 == 1 || tableWidth.value % 2 == 1) 
//         || (tableHeight.value <= 0 || tableWidth.value <= 0)) {
//             console.log('Invalid fundament size!');
//             alert('Invalid fundament size!');
//             return -1;
//         };

//         for (let row = 0; row < tableHeight.value; row++) {
//             let currentRow = `<tr>\n`;
//             newInputArray.push([]);
//             for (let col = 0; col < tableWidth.value; col++) {
//                 newInputArray[row].push(0);
//                 currentRow += `<td><input type="number"></td>\n`;
//             };
//             currentRow += `</tr>\n`;
//             inputTable.insertAdjacentHTML('beforeend', currentRow);
//         };

//         tableHeight.value = '';
//         tableWidth.value = '';
//         topText.style.display = 'none';
//         this.inputArray = newInputArray;
//         this.inputTable = inputTable.innerHTML;
//     };
// };

// const table = new Table();

let inputArray
let inputTable = document.getElementsByClassName('input-table')[0];
let topText = document.getElementsByTagName('header')[0];

let sizeButton = document.getElementById('btn-input');
sizeButton.addEventListener('click', validateInput);

let inputTableResult = inputTable.innerHTML;

let clearTable = document.getElementById('btn-clear-table');
clearTable.addEventListener('click', clearTbl);

let enterButton = document.getElementsByClassName('btn')[2];
enterButton.addEventListener('click', displayResult);

function validateInput() {
    let newInputArray = [];
    let tableHeight = document.getElementById('height');
    let tableWidth = document.getElementById('width');
    inputTable.innerHTML = '';

    // Validate table width and height
    if ((tableHeight.value % 2 == 1 || tableWidth.value % 2 == 1) 
    || (tableHeight.value <= 0 || tableWidth.value <= 0)) {
        console.log('Invalid fundament size!');
        alert('Invalid fundament size!');
        return -1;
    };

    for (let row = 0; row < tableHeight.value; row++) {
        let currentRow = `<tr>\n`;
        newInputArray.push([]);
        for (let col = 0; col < tableWidth.value; col++) {
            newInputArray[row].push(0);
            currentRow += `<td><input type="number"></td>\n`;
        };
        currentRow += `</tr>\n`;
        inputTable.insertAdjacentHTML('beforeend', currentRow);
    };

    tableHeight.value = '';
    tableWidth.value = '';
    topText.style.display = 'none';
    inputArray = newInputArray;
};

function clearTbl() {
    inputTable.innerHTML = '';
    topText.style.display = 'block';
    console.log(inputArray);
};

function displayResult() {
    // Take input
    let [fFloor, sFloor, bricks, rows, cols] = input;
    let [row, col] = [0, 0];
    let newBrick = bricks.shift();

    // Stop Iterator, if solution can't be found
    let stopIterator = 5;

    // Create Second Floor
    while (newBrick && stopIterator > 0) {
        if (col >= cols) {
            row += 2;
            col = 0;
        };

        // Creating pre-made templates solutions
        // 5 Column template --> 1 Vertical and 4 Horizontal Bricks
        let vertHorHor = (fFloor[row][col] == fFloor[row + 1][col])
        && (fFloor[row][col + 1] == fFloor[row][col + 2])
        && (fFloor[row + 1][col + 1] == fFloor[row + 1][col + 2])
        && (fFloor[row][col + 3] == fFloor[row][col + 4])
        && (fFloor[row + 1][col + 3] == fFloor[row + 1][col + 4])
        && (col < cols - 4);

        // 5 Column template --> 4 Horizontal and 1 Vertical Brick
        let horHorVert = (fFloor[row][col] == fFloor[row][col + 1])
        && (fFloor[row + 1][col] == fFloor[row + 1][col + 1]) 
        && (fFloor[row][col + 2] == fFloor[row][col + 3])
        && (fFloor[row + 1][col + 2] == fFloor[row + 1][col + 3])
        && (fFloor[row][col + 4] == fFloor[row + 1][col + 4])
        && (col < cols - 4);

        // 4 Column template --> 4 Horizontal Bricks
        let horHor = (fFloor[row][col] == fFloor[row][col + 1])
        && (fFloor[row + 1][col] == fFloor[row + 1][col + 1])  
        && (fFloor[row][col + 2] == fFloor[row][col + 3])
        && (fFloor[row + 1][col + 2] == fFloor[row + 1][col + 3])
        && (col < cols - 3);

        // 4 Column template --> 1 Vertical, 2 Horizontal and 1 Vertical Bricks
        let vertHorVert = (fFloor[row][col] == fFloor[row + 1][col]) 
        && (fFloor[row][col + 1] == fFloor[row][col + 2]) 
        && (fFloor[row + 1][col + 1] == fFloor[row + 1][col + 2]) 
        && (fFloor[row][col + 3] == fFloor[row + 1][col + 3])
        && (col < cols - 3);

        // 3 Column template --> 2 Horizontal and 1 Vertical Brick
        let horVert = (fFloor[row][col] == fFloor[row][col + 1]) 
        && (fFloor[row + 1][col] == fFloor[row + 1][col + 1])
        && (fFloor[row][col + 2] == fFloor[row + 1][col + 2])
        && (col < cols - 2);

        // 3 Column template --> 1 Vertical and 2 Horizontal Brick
        let vertHor = (fFloor[row][col] == fFloor[row + 1][col])
        && (fFloor[row][col + 1] == fFloor[row][col + 2]) 
        && (fFloor[row + 1][col + 1] == fFloor[row + 1][col + 2]) 
        && (col < cols - 2);

        // 1 Column template --> 1 Vertical Brick
        let isVertical = (fFloor[row][col] == fFloor[row + 1][col]) 
        && (col < cols - 1);

        // 2 Column template --> 2 Horizontal Bricks
        let isHorizontal = (fFloor[row][col] == fFloor[row][col + 1]) 
        || ((col == cols - 1) && (fFloor[row][col] != (fFloor[row + 1][col])))
        || ((fFloor[row][col] != fFloor[row][col + 1]) && (fFloor[row][col] != fFloor[row + 1][col]));

        // Check for available template and execute
        if (horHorVert) {
            placeVertical();
            placeHorizontal();
            placeHorizontal();
        } else if (vertHorHor) {
            placeHorizontal();
            placeHorizontal();
            placeVertical();
        } else if (vertHorVert) {
            placeHorizontal();
            placeHorizontal();
        } else if (horHor) {
            placeVertical();
            placeHorizontal();
            placeVertical();
        } else if (horVert) {
            placeVertical();
            placeHorizontal();
        } else if (vertHor) {
            placeHorizontal();
            placeVertical();
        } else if (isHorizontal) {
            placeVertical();
        } else if (isVertical) {
            placeHorizontal();
        } else {
            stopIterator--;
        }
    };

    // Create two Horizontal Bricks on two rows
    function placeHorizontal() {
        sFloor[row][col] = newBrick;
        sFloor[row][col + 1] = newBrick;
        newBrick = bricks.shift();
        sFloor[row + 1][col] = newBrick;
        sFloor[row + 1][col + 1] = newBrick;
        newBrick = bricks.shift();
        col += 2;
    };

    // Create one Vertical Brick on current column
    function placeVertical() {
        sFloor[row][col] = newBrick;
        sFloor[row + 1][col] = newBrick;
        col++;
        newBrick = bricks.shift();
    };

    // Validating result for empty spaces
    let result = false;
    sFloor.forEach(x => {
        if (x.includes(0)) {
            result = true;
        };
    });

    // Printing Result
    if (result) {
        console.log('No solution exists!');
        return -1
    } else {
        sFloor.forEach(x => console.log(x.join(' ')));
    };
}