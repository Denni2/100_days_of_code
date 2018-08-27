function iqTester(str){
  str = "1 2 2";
  str = str.split(" ");
  let arr = [];
  let val = 1;
  for (x = 0; x < str.length; x++){
    arr.push(str[x] % 2);
  }
  for (x = 0; x < arr.length; x++){
    if (arr.indexOf(arr[x]) == arr.lastIndexOf(arr[x])){
      val += arr.indexOf(arr[x]);
      console.log(val);
    }
  }
  return val;

}

document.getElementById('app').innerHTML = iqTester();
