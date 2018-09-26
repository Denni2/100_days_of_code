getDiagonals = arr => {
  arr = [[1, 2, 3],
         [4, 5, 6],
         [9, 8, 9]];

  let val = arr.length - 1, // use val to track subtraction progress in loop against y
  diag_1 = 0, // placeholder for the first diagonal
  diag_2 = 0, // values for the second diagonal
  y = 0; // used for values within the child arrays

  // get the diagonals of the square matrix
  for (x = 0; x < arr.length; x++){
    y = x;
    diag_1 += arr[x][y];
    diag_2 += arr[x][val - y];
  }

  return Math.abs(diag_1 - diag_2);

}
document.getElementById('app').innerHTML = getDiagonals();
