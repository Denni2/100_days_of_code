compareTriplets = (a, b) => {
  a = [2, 4, 6];
  b = [1, 4, 5];

  let x = 0, count_a = 0, count_b = 0, arr = [];
  // loop through the arrays to do the computations

  while (x < a.length){
    if (a[x] != b[x]){
      if (a[x] > b[x]){
        count_a += 1;
      }
      else {
        count_b += 1;

      }
    }
    x++;
  }
  arr.push(count_a, count_b);
  document.open();
  document.write("<p>First Student's points: " + a + "</p>")
  document.write("<p>Second Student's points: " + b + "</p>");
  document.write("<p> First Student vs Second student on average " + arr + "</p>");
  document.close();

  return(b);
}

document.getElementById('app').innerHTML = compareTriplets();
