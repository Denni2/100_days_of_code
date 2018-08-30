findNextSquare = sq => {
  sq = 145;

  // get the root of the current value and add 1 to get to the next value
  // square the value
  let val = Math.pow(Math.sqrt(sq) + 1, 2);

  // return the square if val is a whole square root and -1 if not
  Number.isInteger(val) ? val : val = -1;

  return val;
}

document.getElementById("app").innerHTML = findNextSquare();
