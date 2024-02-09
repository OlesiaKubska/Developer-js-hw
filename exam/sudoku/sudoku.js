document.addEventListener("DOMContentLoaded", function () {
 const startButton = document.getElementById("start-button");
 startButton.addEventListener("click", function () {
  const initialBoard = getInitialBoard();
  generateBoard(initialBoard);
 });
});

function getInitialBoard() {
 return [
  ["7", ".", "4", "8", ".", ".", "3", ".", "1"],
  ["8", "2", ".", "5", ".", ".", ".", "4", "."],
  [".", ".", "9", "4", "3", ".", "5", ".", "."],
  ["3", "1", ".", ".", ".", ".", "8", ".", "7"],
  [".", "8", ".", ".", ".", ".", ".", "1", "."],
  ["9", ".", "7", ".", ".", ".", ".", "3", "2"],
  [".", ".", "6", ".", "1", "5", "4", ".", "."],
  [".", "7", ".", ".", ".", "9", ".", "6", "5"],
  ["5", ".", "8", ".", ".", "2", "1", ".", "3"],
 ];
}

function generateBoard(boardData) {
 const board = document.getElementById("sudoku-board");
 board.innerHTML = "";
 for (let i = 0; i < 9; i++) {
  const row = board.insertRow();
  for (let j = 0; j < 9; j++) {
   const cell = row.insertCell();
   cell.textContent = boardData[i][j] !== "." ? boardData[i][j] : "";
   cell.classList.add("sudoku-cell");
   if ((i + 1) % 3 === 0 && i !== 8) {
    cell.style.borderBottom = "2px solid #333";
   }
   if ((j + 1) % 3 === 0 && j !== 8) {
    cell.style.borderRight = "2px solid #333";
   }

   cell.addEventListener("click", function () {
    if (boardData[i][j] === ".") {
     const num = prompt("Enter a number (1-9):");
     if (
      num !== null &&
      num !== "" &&
      !isNaN(num) &&
      parseInt(num) >= 1 &&
      parseInt(num) <= 9
     ) {
      boardData[i][j] = num;
      generateBoard(boardData);
     } else {
      alert("Please enter a valid number from 1 to 9.");
     }
    }
   });
  }
 }
}

function isValid(board, row, col, num) {
 for (let i = 0; i < 9; i++) {
  const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
  const n = 3 * Math.floor(col / 3) + (i % 3);
  if (board[row][i] == num || board[i][col] == num || board[m][n] == num) {
   return false;
  }
 }
 return true;
}

//rozwiązujemy łamigłówkę sudoku
function solveSudoku(data) {
 for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
   if (data[i][j] == ".") {
    for (let k = 1; k <= 9; k++) {
     if (isValid(data, i, j, k)) {
      data[i][j] = `${k}`;
      if (solveSudoku(data)) {
       return true;
      } else {
       data[i][j] = ".";
      }
     }
    }
    return false;
   }
  }
 }
 return true;
}

let board = [
 ["7", ".", "4", "8", ".", ".", "3", ".", "1"],
 ["8", "2", ".", "5", ".", ".", ".", "4", "."],
 [".", ".", "9", "4", "3", ".", "5", ".", "."],
 ["3", "1", ".", ".", ".", ".", "8", ".", "7"],
 [".", "8", ".", ".", ".", ".", ".", "1", "."],
 ["9", ".", "7", ".", ".", ".", ".", "3", "2"],
 [".", ".", "6", ".", "1", "5", "4", ".", "."],
 [".", "7", ".", ".", ".", "9", ".", "6", "5"],
 ["5", ".", "8", ".", ".", "2", "1", ".", "3"],
];

solveSudoku(board);
console.log(board);
