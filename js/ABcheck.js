function checkAB (str) {
  var ans, x, y;
  let count_a = 0;
  let count_b = 0;
  str = str.toLowerCase();
  for (x = 0; x < str.length; x++){
    if (str[x] == 'a' && str[x + 4] == 'b') {
      return true;
    }
  }
  return false;
}

document.getElementById('app').innerHTML = checkAB("Laura sobs");
