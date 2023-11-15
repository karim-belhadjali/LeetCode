/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

    Each row must contain the digits 1-9 without repetition.
    Each column must contain the digits 1-9 without repetition.
    Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

Note:

    A Sudoku board (partially filled) could be valid but is not necessarily solvable.
    Only the filled cells need to be validated according to the mentioned rules.

 

Example 1:

Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true

Example 2:

Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

 

Constraints:

    board.length == 9
    board[i].length == 9
    board[i][j] is a digit 1-9 or '.'.

 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
// Wrong Answer
var isValidSudokuWrong = function (board) {
    // an array in the board is of length of 9 from 0 to 8
    // board have 9 array total
    // we validate each array first to not have a duplicate in each and numbers are between 1 and 9
    // we validate each column to not have duplicates and number are between 1 and 9
    // create a map  for each index meaning from 0 to 9
    // each entry have 2 arrays, the first one for columns and one for lines
    // we loop the board twice one for columns and one for lines
    // we add the correspending number for each index in the arrays columns and numbers
    // if value between 1 and 9 and different from . then we add them
    // if already exist then return false if not continue
    // now the hard par which testing each 3x3 sudoku
    let linesColumnsMap = new Map();

    for (let i = 0; i < board.length; i++) {
        linesColumnsMap.set(i, [[], []]);
    }

    for (let j = 0; j < board.length; j++) {
        for (let lineIndex = 0; lineIndex < board.length; lineIndex++) {

            if (linesColumnsMap.get(j)[0].includes(board[j][lineIndex])) return false
            else if (board[j][lineIndex] !== ".") linesColumnsMap.set(j, [[...linesColumnsMap.get(j)[0], board[j][lineIndex]], [...linesColumnsMap.get(j)[1]]])
        }
        for (let columnIndex = 0; columnIndex < board.length; columnIndex++) {
            if (linesColumnsMap.get(j)[1].includes(board[columnIndex][j])) return false
            else if (board[columnIndex][j] !== ".") linesColumnsMap.set(j, [[...linesColumnsMap.get(j)[0]], [...linesColumnsMap.get(j)[1], board[columnIndex][j]]])
        }

    }


    // we'll itreate through the column
    // we'll take 3 lines from each array in the board and then we increment the colum index we're using K by 3 to pass to the next 3 inner sudoku

    for (let k = 0; k < array.length; k += 3) {
        let innerSudoku = []
        for (let index = k; index < k + 4; index++) {
            if (board[columnIndex][j] !== "." && !innerSudoku.includes(board[k][index])) return false

        }

    }


};

/**
 * @param {character[][]} board
 * @return {boolean}
 */
// Valid Answer
var isValidSudoku = function (board) {
    // the Idea here is to create 3 maps that represent all numbers in lines, columns and innerSudoku 3x3
    // first loop will represent the row
    // second inner loop will represent the columns
    // for each line we will go through each column
    // and test if the current number board[row][column] is present in:
    // linesMap.get(row) => current row
    // columnsMap.get(column) => current column
    // innerSudokuMap.get (row/3,column/3)=> current inner 3x3 sudoku 
    // if it's present in any of them we return false
    // otherwise we continue until we reach the end of the function and we return false

    // Main techniques used:
    // HashSets => to detect duplicates
    // HashMap => to hold record with common Keys
    // Double index=> row index represent current row in the loop and column index representing cuurent column in the loop
    // to go through every entry of the parameter that is repsented by board[row][column]

    let linesMap = new Map();
    let columnsMap = new Map();
    let innerSudokuMap = new Map()

    for (let row = 0; row < board.length; row++) {
        for (let column = 0; column < board.length; column++) {
            let currentEntry = board[row][column];
            if (currentEntry === ".") continue;
            let gridIndex = `${Math.floor(row / 3)},${Math.floor(column / 3)}`;
            if (!linesMap.has(row)) {
                linesMap.set(row, new Set());
            }
            if (!columnsMap.has(column)) {
                columnsMap.set(column, new Set());
            }
            if (!innerSudokuMap.has(gridIndex)) {
                innerSudokuMap.set(gridIndex, new Set());
            }
            if (linesMap.get(row).has(currentEntry)
                || columnsMap.get(column).has(currentEntry) ||
                innerSudokuMap.get(gridIndex).has(currentEntry)) return false

            linesMap.get(row).add(currentEntry)
            columnsMap.get(column).add(currentEntry)
            innerSudokuMap.get(gridIndex).add(currentEntry)
        }
    }
    return true

};

console.log(isValidSudoku([["5", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]))