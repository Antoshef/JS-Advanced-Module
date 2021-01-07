
let fundament = {
    validateInput() {
        // Take Input
        let newInputArray = [];
        let tableHeight = document.getElementById('height');
        let tableWidth = document.getElementById('width');
        inputTable.innerHTML = '';
    
        // Validate Table Width and Height
        if ((tableHeight.value % 2 == 1 || tableWidth.value % 2 == 1) 
        || (tableHeight.value <= 0 || tableWidth.value <= 0)) {
            alert('Invalid fundament size!');
            return -1;
        };
    
        // Set First Floor Table HTML
        // Set Second Floor as Empty Array
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

        // Add Result to Object
        document.getElementById('hidden').style.display = 'block';
        fundament.rows = tableHeight.value;
        fundament.cols = tableWidth.value;
        tableHeight.value = '';
        tableWidth.value = '';
        outputTable.innerHTML = '';
        instructionsText.innerHTML = 'Insert bricks with numbers.<br>Two blocks form one brick.';
        fundament.sFloor = newInputArray;
        fundament.inputText = inputTable;
    },

    // Clear Button
    clearTbl() {
        inputTable.innerHTML = '';
        instructionsText.innerHTML = 'Set Fundament Width and Height.<br>Each parameter should be even number.'
        outputTable.innerHTML = '';
        document.getElementsByTagName('header')[0].style.display = 'block';
        document.getElementById('hidden').style.display = 'none';
    },

    displayResult() {
        // Take input
        let [text, sFloor, rows, cols] = [fundament.inputText, fundament.sFloor, fundament.rows, fundament.cols];
        let inputElements = text.querySelectorAll('input');
        let fFloor = [];
        let y = 0;
        let bricksUsed = {};
        document.getElementsByTagName('header')[0].style.display = 'none';

        // Validating input
        for (let i = 0; i < fundament.rows; i++) {
            let currentRow = [];
            for (let o = 0; o < fundament.cols; o++) {
                let currentElement = inputElements[y].value;
                let cc = Number(currentElement);
                if (cc < 5) {
                    cc += 70;
                } else if (cc < 10) {
                    cc += 40;
                } else if (cc < 20) {
                    cc += 50;
                };
                if (currentElement % 5 == 0) {
                    inputElements[y].style.backgroundColor = `#${cc}${cc}14`;
                } else if (currentElement % 4 == 0) {
                    inputElements[y].style.backgroundColor = `#72${cc}${cc}`;
                } else if (currentElement % 3 == 0) {
                    inputElements[y].style.backgroundColor = `#12${cc}${cc}`;
                } else if (currentElement % 2 == 0) {
                    inputElements[y].style.backgroundColor = `#${cc}25${cc}`;
                } else {
                    inputElements[y].style.backgroundColor = `#${cc}${cc}99`;
                };
                y++;
                currentRow.push(currentElement);
                if (bricksUsed[currentElement]) {
                    bricksUsed[currentElement] += 1;
                } else {
                    bricksUsed[currentElement] = 1;
                };
            };
            fFloor.push(currentRow);
        };

        // Check Bricks Size
        let bricksQty = Object.values(bricksUsed);
        let filtered = bricksQty.filter(x => x != 2);
        if (filtered.length > 0) {
            alert('Invalid brick size!');
            return -1;
        };

        let bricks = Object.keys(bricksUsed);
        
        // Validate Bricks input
        let checkBricks = bricks.filter(x => {
            return x < 1 || x > 99; 
        });
        if (checkBricks.length > 0) {
            alert('Invalid Bricks used!');
            return - 1;
        };

        // Check Bricks Quantity
        if (bricks.length * 2 != rows * cols) {
            alert('Bricks exceed floor size');
            return -1;
        };

        // Stop Iterator, if solution can't be found
        let stopIterator = 5;
    
        // Create Second Floor
        let [row, col] = [0, 0];
        let newBrick = bricks.shift();
        while (newBrick && stopIterator > 0) {
            if (col >= cols) {
                row += 2;
                col = 0;
            };
    
            // Creating pre-made templates solutions
            // 5 Column template --> 1 Vertical and 4 Horizontal Bricks
            let setVertHorVert = (fFloor[row][col] != fFloor[row + 1][col])
            && (fFloor[row][col + 1] != fFloor[row][col + 2])  
            && (fFloor[row + 1][col + 1] != fFloor[row + 1][col + 2])
            && (fFloor[row][col + 3] != fFloor[row + 1][col + 3])
            && (col < cols - 3);

            // 4 Column template --> 1 Vertical, 2 Horizontal and 1 Vertical Bricks
            let setTwoHor = (fFloor[row][col] != fFloor[row][col + 1]) 
            && (fFloor[row + 1][col] != fFloor[row + 1][col + 1]) 
            && (fFloor[row][col + 2] != fFloor[row][col + 3]) 
            && (fFloor[row + 1][col + 2] != fFloor[row + 1][col + 3])
            && (col < cols - 3);

            // 4 Column template -->  2 Horizontal and 2 Vertical Bricks
            let setTwoVertHor = (fFloor[row][col] != fFloor[row + 1][col])
            && (fFloor[row][col + 1] != fFloor[row + 1][col + 1])
            && (fFloor[row][col + 2] != fFloor[row][col + 3])
            && (fFloor[row + 1][col + 2] != fFloor[row + 1][col + 3])
            && (col < cols - 3);

            // 4 Column template --> 2 Vertical, 2 Horizontal Bricks
            let setHorTwoVert = (fFloor[row][col] != fFloor[row][col + 1])
            && (fFloor[row + 1][col] != fFloor[row + 1][col + 1])
            && (fFloor[row][col + 2] != fFloor[row + 1][col + 2])
            && (fFloor[row][col + 3] != fFloor[row + 1][col + 3])
            && (col < cols - 3);

            // 2 Column template --> 2 Vertical Brick
            let setTwoHorizontal = (fFloor[row][col] != fFloor[row][col + 1]) 
            && (fFloor[row + 1][col] != fFloor[row + 1][col + 1])
            && (col < cols - 1);

            // 2 Column template --> 2 Horizontal Bricks
            let setTwoVerticals = (fFloor[row][col] != fFloor[row + 1][col]) 
            && (fFloor[row][col + 1] != fFloor[row + 1][col + 1])
            && (col < cols - 1);
    
            // Check for available template and execute
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
        if (result) {
            alert('No solution exists!');
            return -1
        } else {

            for (let row = 0; row < rows; row++) {
                let sFloorRow = sFloor[row];
                let currentRow = `<tr>\n`;
                for (let col = 0; col < cols; col++) {
                    let sc = Number(sFloorRow[col]);
                    if (sc < 5) {
                        sc += 70;
                    } else if (sc < 10) {
                        sc += 40;
                    } else if (sc < 20) {
                        sc += 50;
                    };
                    if (sFloorRow[col] % 5 == 0) {
                        currentRow += `<td><input type="number" style="background-color:#${sc}${sc}14;" value="${sFloorRow[col]}" disabled></td>\n`;
                    } else if (sFloorRow[col] % 4 == 0) {
                        currentRow += `<td><input type="number" style="background-color:#72${sc}${sc};" value="${sFloorRow[col]}" disabled></td>\n`;
                    } else if (sFloorRow[col] % 3 == 0) {
                        currentRow += `<td><input type="number" style="background-color:#12${sc}${sc};" value="${sFloorRow[col]}" disabled></td>\n`;
                    } else if (sFloorRow[col] % 2 == 0) {
                        currentRow += `<td><input type="number" style="background-color:#${sc}25${sc};" value="${sFloorRow[col]}" disabled></td>\n`;
                    } else {
                        currentRow += `<td><input type="number" style="background-color:#${sc}${sc}99;" value="${sFloorRow[col]}" disabled></td>\n`;
                    };
                };
                currentRow += `</tr>\n`;
                outputTable.insertAdjacentHTML('beforeend', currentRow);
            };
        };
    }
};
let inputTable = document.getElementsByClassName('input-table')[0];
let topText = document.getElementsByTagName('header')[0];
let instructionsText = document.getElementById('instructions');
let outputTable = document.getElementsByClassName('output-table')[0];

let sizeButton = document.getElementById('btn-input');
sizeButton.addEventListener('click', fundament.validateInput);

let inputTableResult = inputTable.innerHTML;

let clearTable = document.getElementById('btn-clear-table');
clearTable.addEventListener('click', fundament.clearTbl);

let enterButton = document.getElementsByClassName('btn')[2];
enterButton.addEventListener('click', fundament.displayResult);
