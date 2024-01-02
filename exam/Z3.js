//Write a program that will solve simple sudoku (not only the example below!)

//Funkcja iteruje przez każdą liczbę od 0 do 8
//(co odpowiada indeksom wierszy i kolumn w tablicy 9x9).
function isValid(board, row, col, num) {
 for (let i = 0; i < 9; i++) {
  //obliczamy indeksy m i n
  //aby uzyskać poprawny indeks w sektorze
  const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
  const n = 3 * Math.floor(col / 3) + (i % 3);
  //Jeśli warunki nie spełniony  zwraca false,
  //liczba nie jest prawidłowa dla tej pozycji.
  if (board[row][i] == num || board[i][col] == num || board[m][n] == num) {
   return false;
  }
 }
 //zwraca true, wskazując, że jest to prawidłowy wybór dla tej komórki
 return true;
}

//rozwiązujemy łamigłówkę sudoku
function solveSudoku(data) {
 //pętla for dla wierszy
 for (let i = 0; i < 9; i++) {
  //pętla for dla kolumn
  for (let j = 0; j < 9; j++) {
   //sprawdzamy, czy komórka jest pusta
   if (data[i][j] == ".") {
    //umieściamy w niej kolejno każdą liczbę od 1 do 9
    for (let k = 1; k <= 9; k++) {
     // wywołuje isValid, aby sprawdzić, czy umieszczenie k w komórce (i, j) jest dozwolone zgodnie z zasadami sudoku.
     if (isValid(data, i, j, k)) {
      //Jeśli liczba jest dozwolona funkcja umieszcza tę liczbę w komórce.
      data[i][j] = `${k}`;
      //funkcja rekurencyjnie wywołuje samą siebie
      if (solveSudoku(data)) {
       return true;
      } else {
       //Jeśli k nie prowadzi do rozwiązania,
       //funkcja "cofa" zmianę i przywraca komórkę do stanu "."
       //i kontynuuje próby z następnymi liczbami.
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

// let board = [
//  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//  [".", "9", "8", ".", ".", ".", ".", "6", "."],
//  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//  [".", "6", ".", ".", ".", ".", "2", "8", "."],
//  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ];

solveSudoku(board);
console.log(board);
