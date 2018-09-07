getSides = (a, b, c) => {
  //a = 1; b = 5; c = 5;
  //a = 2; b = 2; c = 2;
  a = 1; b = 2; c = 3;

  // two of the measurements should not add up to the third
  // each different value should not be greater than two in difference

  // three equal sides

  // hacked solution
  return a + b > c && a + c > b && b + c > a;



}
document.getElementById('app').innerHTML = getSides();


// my long solution

/*

let val = a + b +c;

if ((a == b) && (b == c)){
  return true;
}

// two equal sides

else if ((a == b && a > c) || (a == c && a > b) || (b == c && b > a)){
  return true
}

// unequal sides
// rules for unequal getSides
else if ((a != b) && (b != c) && (c != a)) {
  if ((a - b < 3 && a - b > -3) && (a - c < 3 && a - c > -3) && (b - c < 3 && b - c > -3)){
    if (a + b != c && a + c != b && b + c != a){
      return true;
    }
  }
}

return false;

*/
