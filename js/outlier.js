getOutlier = arr => {
  arr = [ 2, -6, 8, -10, -3];


  // the array has at least 3 values all integer
  // the array is either entirely comprised of all but one
  // odd integers or all but one even integers
  // find the Outlier

  let count = 0, counter = 0;
  for (x = 0; x < arr.length; x++){
    if (arr[x] % 2 == 0){
      count++;
      val = arr[x];
    }
    else {
      counter++;
      val2 = arr[x];
    }
  }
  return count == 1 ? val : val2;
}

document.getElementById('app').innerHTML = getOutlier();


/*



*/
