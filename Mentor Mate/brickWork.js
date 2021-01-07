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
    let stopIterator = 3;

    // Create Second Floor
    while (newBrick && stopIterator > 0) {
        if (col >= cols) {
            row += 2;
            col = 0;
        };

        // Creating pre-made templates solutions
        // 4 Column template --> set 1 Vertical ->> 2 Horizontal ->> 1 Vertical Brick
        let setVertHorVert = (fFloor[row][col] != fFloor[row + 1][col])
        && (fFloor[row][col + 1] != fFloor[row][col + 2])  
        && (fFloor[row + 1][col + 1] != fFloor[row + 1][col + 2])
        && (fFloor[row][col + 3] != fFloor[row + 1][col + 3])
        && (col < cols - 3);

        // 4 Column template --> set 2 Horizontal ->> set another 2 Horizontal Bricks
        let setTwoHor = (fFloor[row][col] != fFloor[row][col + 1]) 
        && (fFloor[row + 1][col] != fFloor[row + 1][col + 1]) 
        && (fFloor[row][col + 2] != fFloor[row][col + 3]) 
        && (fFloor[row + 1][col + 2] != fFloor[row + 1][col + 3])
        && (col < cols - 3);

        // 4 Column template -->  set Two Vertical ->> set Two Horizontal Bricks
        let setTwoVertHor = (fFloor[row][col] != fFloor[row + 1][col])
        && (fFloor[row][col + 1] != fFloor[row + 1][col + 1])
        && (fFloor[row][col + 2] != fFloor[row][col + 3])
        && (fFloor[row + 1][col + 2] != fFloor[row + 1][col + 3])
        && (col < cols - 3);

        // 4 Column template --> set 2 Horizontal ->> set Two Vertical Bricks
        let setHorTwoVert = (fFloor[row][col] != fFloor[row][col + 1])
        && (fFloor[row + 1][col] != fFloor[row + 1][col + 1])
        && (fFloor[row][col + 2] != fFloor[row + 1][col + 2])
        && (fFloor[row][col + 3] != fFloor[row + 1][col + 3])
        && (col < cols - 3);

        // 2 Column template --> set 2 Horizontal Bricks
        let setTwoHorizontal = (fFloor[row][col] != fFloor[row][col + 1]) 
        && (fFloor[row + 1][col] != fFloor[row + 1][col + 1])
        && (col < cols - 1);

        // 2 Column template --> set 2 Vertical Bricks
        let setTwoVerticals = (fFloor[row][col] != fFloor[row + 1][col]) 
        && (fFloor[row][col + 1] != fFloor[row + 1][col + 1])
        && (col < cols - 1);

        // Check for available Templates and Execute
        if (setTwoHor) {
            placeHorizontal();
            placeHorizontal();
        } else if (setVertHorVert) {
            placeVertical();
            placeHorizontal();
            placeVertical();
        } else if (setTwoVertHor) {
            placeVertical();
            placeVertical();
            placeHorizontal();
        } else if (setHorTwoVert) {
            placeHorizontal();
            placeVertical();
            placeVertical();
        } else if (setTwoVerticals) {
            placeVertical();
            placeVertical();
        } else if (setTwoHorizontal) {
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
    if (result || stopIterator == 0) {
        console.log('No solution exists!');
        return -1
    } else {
        for (let i = 0; i < sFloor.length; i++) {
            let currRow = '';
            let lastBrick = sFloor[i][0];
            for (let o = 0; o < sFloor[i].length; o++) {
                let currentBrick = sFloor[i][o];
                if (currentBrick != lastBrick) {
                    currRow += '*' + currentBrick;
                } else {
                    currRow += currentBrick;
                };
                lastBrick = currentBrick;
            };
            console.log(currRow);
        };
    };
};

let firstFloor = inputCheck([[4, 10],
    [20,22,15,15,14,19,26,25,25,23],
    [20,22,10,10,14,19,26,28,28,23],
    [44,40,40,42,42,45,60,62,61,69],
    [44,55,55,59,59,45,60,62,61,69]
]);

buildingSecondFloor(firstFloor);
