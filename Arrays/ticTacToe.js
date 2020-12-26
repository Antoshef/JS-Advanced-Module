function ticTacToe(input) {
    let board = [[false, false, false],
                [false, false, false],
                [false, false, false],];

    let player;

    for (let i = 0; i < input.length; i++) {
        
        if (i % 2 == 0) {
            player = 'X';
        } else {
            player = 'O';
        };
        let [row, col] = input[i].split(' ');
        if (board[row][col] === false) {
            board[row][col] = player;
        } else {
            console.log('This place is already taken. Please choose another!');
            let removed = input.splice(i,1);
            i--;
            continue;
        };
        var xWin = (board[0].every(x => x == 'X') || board[1].every(x => x == 'X') || board[2].every(x => x == 'X') || 
        (board[0][0] == 'X' && board[1][1] == 'X' && board[2][2] == 'X') || (board[0][2] == 'X' && board[1][1] == 'X' && board[2][0] == 'X')
        || (board[0][0] == 'X' && board[1][0] == 'X' && board[2][0] == 'X') || (board[0][1] == 'X' && board[1][1] == 'X' && board[2][1] == 'X') || 
        (board[0][2] == 'X' && board[1][2] == 'X' && board[2][2] == 'X'));
        var oWin = (board[0].every(x => x == 'O') || board[1].every(x => x == 'O') || board[2].every(x => x == 'O') || 
        (board[0][0] == 'O' && board[1][1] == 'O' && board[2][2] == 'O') || (board[0][2] == 'O' && board[1][1] == 'O' && board[2][0] == 'O')
        || (board[0][0] == 'O' && board[1][0] == 'O' && board[2][0] == 'O') || (board[0][1] == 'O' && board[1][1] == 'O' && board[2][1] == 'O') || 
        (board[0][2] == 'O' && board[1][2] == 'O' && board[2][2] == 'O'));
        if (xWin) {
            console.log('Player X wins!');
        } else if (oWin) {
            console.log('Player O wins!');
        };
        if (xWin || oWin) {
            board.forEach(x => {
                console.log(x.join('\t'));
            });
            break;
        }; 
        if (board[0].every(x => x !== false) && board[1].every(x => x !== false) && board[2].every(x => x !== false)) {
            break;
        };
    };
    if (!xWin && !oWin) {
        console.log('The game ended! Nobody wins :(');
        board.forEach(x => {
            console.log(x.join('\t'));
        });
    };
};
ticTacToe(
    ["0 1",
    "2 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "2 1",
    "2 2",
    '0 0',
    '1 2',
    "0 0",
    '1 2']
)