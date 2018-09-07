getSums = arr => {
  arr = [50000, 10000000000000000];
  return arr.reduce((a, b) => a + b);
}

document.getElementById('app').innerHTML = getSums();
