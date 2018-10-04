convertTime  = str_val => {
  str_val = '12:45:05PM';
  let new_val = 0;

  let val = parseInt(str_val.slice(0, 2));

  let time_val = (str_val.slice(-2));
  if (time_val == 'PM' && val <= 11){
    val += 12;
  }
  else if (time_val == 'AM' && val == 12){
    val = "00";
  }
  else if (time_val == 'PM' && val == 12){
    val = "12";
  }

  else {
    val = "0" + val.toString();
  }

  val = val.toString().split('');
  new_val = str_val.split('');
  new_val.splice(0, 2, val[0], val[1]);
  new_val.splice(-2, 2);
  new_val = new_val.join('');

  return new_val;

}

document.getElementById('app').innerHTML = convertTime();
