function inputCheck(input) {
    // Validate Width and Height
    let [n, m] = input.shift()
    .split(' ')
    .map(Number)
    .filter(x => x <= 100 && x > 0);
    if ((isNaN(n) || isNaN(m)) || (n % 2 == 1 || m % 2 == 1)) {
        console.log('Invalid fundament size!');
        return -1;
    };

    // Validate Floor Size
    let groundFloor = input.shift();
    let bricksQty = groundFloor
    .split(' ')
    .length;
    if (bricksQty != n * m) {
        console.log('Bricks exceed floor size');
        return -1;
    };
    let firstFloor = [];
    groundFloor = groundFloor.split(' ');
    let bricksUsed = {};

    // Building a matrix of the First floor
    for (let i = 0; i < n; i++) {
        let row = [];
        for (let o = 0; o < m; o++) {
            let current = groundFloor.shift()
            .split('\n')[0];

            // Validating Current Brick
            if (current < 1) {
                console.log('Error! Invalid Brick');
                return -1;
            };
            row.push(current);

            // Adding used Brick and Size
            if (bricksUsed[current]) {
                bricksUsed[current] += 1;
            } else {
                bricksUsed[current] = 1;
            };
        };
        firstFloor.push(row);
    };

    // Validating Bricks size
    let bricksSize = Object.values(bricksUsed);
    let falseSize = bricksSize.filter(x => x != 2);
    if (falseSize.length > 0) {
        console.log('Error! Ivalid brick sizes');
        return -1;
    };

    // Place Bricks randomly
    let bricks = Object.keys(bricksUsed);
    bricks = bricks.map(Number);
    bricks.sort((a, b) => {return 0.5 - Math.random()});

    // Filling Second floor with elements
    let floor = new Array(n)
    .fill([]);
    let secondFloor = [];
    floor.forEach(row => {
        let newRow = new Array(m)
        .fill(0);
        secondFloor.push(newRow);
    });

    let result = [];
    result.push(firstFloor, secondFloor, bricks, n, m);
    return result;
};

function buildingSecondFloor(input) {
    let [fFloor, sFloor, bricks, rows, cols] = input;
    let [row, col] = [0, 0];
    let newBrick = bricks.shift();
    let stopIterator = 5;

    // Building the second floor
    while (newBrick && stopIterator > 0) {
        if (col >= cols) {
            row += 2;
            col = 0;
        };

        let horVert = (fFloor[row][col] == fFloor[row][col + 1]) 
        && (fFloor[row][col + 2] == fFloor[row + 1][col + 2])
        && (col < cols - 2);

        let vertHor = (fFloor[row][col] == fFloor[row + 1][col])
        && (fFloor[row][col + 1] == fFloor[row][col + 2]) 
        && (col < cols - 2);

        let isVertical = (fFloor[row][col] == fFloor[row + 1][col]) && (col < cols - 1);

        let isHorizontal = (fFloor[row][col] == fFloor[row][col + 1]) 
        || ((col == cols - 1) && (fFloor[row][col] != (fFloor[row + 1][col])))
        || ((fFloor[row][col] != fFloor[row][col + 1]) && (fFloor[row][col] != fFloor[row + 1][col]));

        if (horVert) {
            placeVertical();
            placeHorizontal();
        } else if (vertHor) {
            placeHorizontal();
            placeVertical();
        } else if (isVertical) {
            placeHorizontal();
        } else if (isHorizontal) {
            placeVertical();
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

    // Validating result
    let result = false;
    sFloor.forEach(x => {
        if (x.includes(0)) {
            result = true;
        };
    });

    if (result) {
        console.log('No solution exists!');
        return -1
    } else {
        sFloor.forEach(x => console.log(x.join(' ')));
    };
};

let firstFloor = inputCheck(['4 8',
`9 9 7 7 6 6 11 11
 16 16 5 5 14 14 3 3
 1 2 2 8 15 15 4 4
 1 13 13 8 12 12 10 10`
]);

let secondPhase = buildingSecondFloor(firstFloor);