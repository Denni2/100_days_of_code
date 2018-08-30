findSmallestInt = val => {
  // find the smallest value in the array
  val = [145,	285,	67, 269, 3, 185, 130, 264, 97,	67, 167, 112, 118,	-99, 76,
257, 205, 166,	55,	-76,
125, 300, 146,	18,	41];

  // gets the mathematically least value in the array
  console.log(Math.min(...val));

  console.log(val);
}

document.getElementById('app').innerHTML = findSmallestInt();
