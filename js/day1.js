function kaprekarsConstant (num){
  num = 8;
  var changer, min, max;

  let val = 0;
  var arr = [];
  let x = 1; //with the first non repeated count of the code


  min  = parseInt(num.toString().split('').sort().join(''));
  max = parseInt(num.toString().split('').sort().reverse().join(''));

  val = max - min;

  while (val != 6174){
    if (val < 1000 && val >= 100){
      changer = val.toString();
      arr = changer.split('');
      arr.push('0');
    }
    else if (val < 100){
      x = 0;
      break;
    }
    else {
      changer = val.toString();
      arr = changer.split('');
    }


    min  = parseInt(arr.sort().join(''));
    max = parseInt(arr.sort().reverse().join(''));

    val = max - min;

    x += 1;
  }
  return x;

}

document.getElementById('output').innerHTML = kaprekarsConstant();
