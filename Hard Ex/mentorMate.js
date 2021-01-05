function inputCheck(input) {
    let [n, m] = input.shift()
    .split(' ')
    .map(Number)
    .filter(x => x <= 100);

    // Validating width and heigth
    if (isNaN(n) || isNaN(m)) {
        console.log('Error!');
        return -1;
    };

    let groundFloor = input.shift();
    let currentFloor = [];
    groundFloor = groundFloor.split(' ');
    let usedBricks = {};

    // Building a matrix of the first floor
    for (let i = 0; i < n; i++) {
        let row = [];
        for (let o = 0; o < m; o++) {
            let current = groundFloor.shift()
            .split('\n')[0];

            // Validating Width length
            if (current < 1) {
                console.log('Error! Width not correct');
                return -1;
            };
            row.push(current);

            // Adding used bricks quantity
            if (usedBricks[current]) {
                usedBricks[current] += 1;
            } else {
                usedBricks[current] = 1;
            };
        };
        currentFloor.push(row);
    };

    // Validating bricks size
    let bricksSize = Object.values(usedBricks);
    let falseSize = bricksSize.filter(x => x != 2);
    if (falseSize.length > 0) {
        console.log('Error! Ivalid brick sizes');
        return -1;
    };

    // Validating Heigth length
    if (currentFloor.length !== n) {
        console.log('Error! Heigth not correct');
        return -1;
    };
    let result = [];
    result.push(currentFloor, usedBricks, n, m);
    return result;
};

function settingSecondFloor(input) {
    // Taking the input
    let firstFloor = input.shift();
    let bricksUsed = input.shift();
    let rowsLength = Number(input.shift());
    let colsLength = Number(input.shift());
    let bricks = Object.keys(bricksUsed);
    
    // Filling Second floor with elements
    let floor = new Array(rowsLength)
    .fill([]);
    let secondFloor = [];
    floor.forEach(row => {
        let newRow = new Array(colsLength)
        .fill(0);
        secondFloor.push(newRow);
    });
    let result = [];
    result.push(firstFloor, secondFloor, bricksUsed, rowsLength, colsLength);
    return result;
};

function buildingSecondFloor(input) {
    let [fFloor, sFloor, bricksUsed, rows, cols] = input;
    let bricks = Object.keys(bricksUsed);
    let [row, col] = [0, 0];
    let newBrick = bricks.shift();

    // Building the second floor
    while (newBrick) {
        if (col >= cols) {
            row += 2;
            col = 0;
        };

        let vertHorHor = (fFloor[row][col] == fFloor[row][col + 1]) 
        && (fFloor[row][col + 2] == fFloor[row][col + 3]) 
        && (fFloor[row][col + 4] == fFloor[row + 1][col + 4]);

        let horHorVert = (fFloor[row][col + 4] == fFloor[row + 1][col + 4])
        && (fFloor[row][col] == fFloor[row][col + 1]) 
        && (fFloor[row][col + 2] == fFloor[row][col + 3]) ;

        let horHor = (fFloor[row][col] == fFloor[row][col + 1]) 
        && (fFloor[row][col + 2] == fFloor[row][col + 3]);

        let vertHorVert = (fFloor[row][col] == fFloor[row + 1][col]) 
        && (fFloor[row][col + 1] == fFloor[row][col + 2]) 
        && (fFloor[row][col + 3] == fFloor[row + 1][col + 3]);

        let isVertical = (fFloor[row][col] == fFloor[row][col + 1]) 
        || (fFloor[row][col + 1] != fFloor[row + 1][col + 1]) 
        || (fFloor[row][col] != fFloor[row + 1][col]);

        let isHorizontal = col < (cols - 1) 
        && (fFloor[row][col] != fFloor[row][col + 1]) 
        && (fFloor[row + 1][col] != fFloor[row + 1][col + 1]) 
        && (fFloor[row][col + 1] == fFloor[row][col + 2]);

        if (horHor) {
            sFloor[row][col] = newBrick;
            sFloor[row + 1][col] = newBrick;
            newBrick = bricks.shift();
            col++;
            sFloor[row][col] = newBrick;
            sFloor[row][col + 1] = newBrick;
            newBrick = bricks.shift();
            sFloor[row + 1][col] = newBrick;
            sFloor[row + 1][col + 1] = newBrick;
            newBrick = bricks.shift();
            col += 2;
            sFloor[row][col] = newBrick;
            sFloor[row + 1][col] = newBrick;
            newBrick = bricks.shift();
            col++;
        } else if (vertHorVert) {
            sFloor[row][col] = newBrick;
            sFloor[row][col + 1] = newBrick;
            newBrick = bricks.shift();
            sFloor[row + 1][col] = newBrick;
            sFloor[row + 1][col + 1] = newBrick;
            newBrick = bricks.shift();
            col += 2;
            sFloor[row][col] = newBrick;
            sFloor[row][col + 1] = newBrick;
            newBrick = bricks.shift();
            sFloor[row + 1][col] = newBrick;
            sFloor[row + 1][col + 1] = newBrick;
            newBrick = bricks.shift();
            col += 2;
        } else if (horHorVert) {
            sFloor[row][col] = newBrick;
            sFloor[row + 1][col] = newBrick;
            newBrick = bricks.shift();
            col++;
            sFloor[row][col] = newBrick;
            sFloor[row][col + 1] = newBrick;
            newBrick = bricks.shift();
            sFloor[row + 1][col] = newBrick;
            sFloor[row + 1][col + 1] = newBrick;
            newBrick = bricks.shift();
            col += 2;
            sFloor[row][col] = newBrick;
            sFloor[row][col + 1] = newBrick;
            newBrick = bricks.shift();
            sFloor[row + 1][col] = newBrick;
            sFloor[row + 1][col + 1] = newBrick;
            newBrick = bricks.shift();
            col += 2;
        } else if (vertHorHor) {
            sFloor[row][col] = newBrick;
            sFloor[row][col + 1] = newBrick;
            newBrick = bricks.shift();
            sFloor[row + 1][col] = newBrick;
            sFloor[row + 1][col + 1] = newBrick;
            newBrick = bricks.shift();
            col += 2;
            sFloor[row][col] = newBrick;
            sFloor[row][col + 1] = newBrick;
            newBrick = bricks.shift();
            sFloor[row + 1][col] = newBrick;
            sFloor[row + 1][col + 1] = newBrick;
            newBrick = bricks.shift();
            col += 2;
            sFloor[row][col] = newBrick;
            sFloor[row + 1][col] = newBrick;
            newBrick = bricks.shift();
            col++;
        } else if (isHorizontal) {
            sFloor[row][col] = newBrick;
            sFloor[row][col + 1] = newBrick;
            newBrick = bricks.shift();
            sFloor[row + 1][col] = newBrick;
            sFloor[row + 1][col + 1] = newBrick;
            newBrick = bricks.shift();
            col += 2;
        } else if (isVertical) {
            sFloor[row][col] = newBrick;
            sFloor[row + 1][col] = newBrick;
            col++;
            newBrick = bricks.shift();
        } 
    };
    sFloor.forEach(x => console.log(x.join('*')));
};

let firstFloor = inputCheck(['4 8',
`1 2 2 12 5 7 7 16
 1 10 10 12 5 15 15 16
 9 9 3 4 4 8 8 14
 11 11 3 13 13 6 6 14`
]);

let groundLevel = settingSecondFloor(firstFloor);

let secondPhase = buildingSecondFloor(groundLevel);