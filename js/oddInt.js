getOdds = arr => {
  arr = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5].sort((a, b) => a > b);
  let count = 0, val = 0;

  console.log(arr);

  for (x = 0; x < arr.length; x++){
    let val = arr[x];
    if(arr.lastIndexOf(val) % 2 == 0){
      return arr[x];
    }
  }
}
document.getElementById('app').innerHTML = getOdds();
