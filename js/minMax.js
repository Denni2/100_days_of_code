sumInt = arr => {
  arr = [1, 2, 3, 4, 5].sort((a, b) => a - b);

  //sort array just in case it is not sorted

  let val_min = 0, val_max = 0;

  for (x = 0; x < arr.length - 1; x++){
    val_min += arr[x];
  }
  for (x = arr.length - 1; x > 0; x--){
    val_max += arr[x];
  }
   return (val_min + " " + val_max);
}
document.getElementById('app').innerHTML = sumInt();
