addingBinaries = (a, b) => {
  let sum = a + b;

  return (sum >>> 0).toString(2);
}

document.getElementById('app').innerHTML = addingBinaries(3, 4);
