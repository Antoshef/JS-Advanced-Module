function inputCheck(input) { 
    // Validate Width and Height
    let [n, m] = input.shift()
    .filter(x => x <= 100 && x > 0);
    if ((isNaN(n) || isNaN(m)) || (n % 2 == 1 || m % 2 == 1)) {
        console.log('Invalid fundament size!');
        return -1;
    };
 
    // Validate Floor Size
    let firstFloor = input;
    let bricksQty = 0;
    firstFloor.forEach(x => {
        bricksQty += x.length;
    });
    if (bricksQty != n * m) {
        console.log('Bricks exceed floor size');
        return -1;
    };
    let bricksUsed = {};
    let secondFloor = [];

    // Building a matrix of the First floor
    for (let i = 0; i < n; i++) {
        secondFloor.push([]);
        for (let o = 0; o < m; o++) {
            let current = firstFloor[i][o];
            secondFloor[i].push(0);

            // Validating Current Brick
            if (current < 1) {
                console.log('Error! Invalid Brick');
                return -1;
            };

            // Adding used Brick and Size
            if (bricksUsed[current]) {
                bricksUsed[current] += 1;
            } else {
                bricksUsed[current] = 1;
            };
        };
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

    let result = [];
    result.push(firstFloor, secondFloor, bricks, n, m);
    return result;
};

function buildingSecondFloor(input) {
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
};

let firstFloor = inputCheck([[4, 6],
 [12, 13, 13, 15, 15, 18],
 [12, 20, 33, 38, 38, 18],
 [14, 20, 33, 34, 34, 35],
 [14, 36, 36, 37, 37, 35],
]);

buildingSecondFloor(firstFloor);
