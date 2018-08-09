function chessboardTraveling (str){
  str="(1 1)(3 8)";
  str = str.match(/[1-8]/gi);
  var x = parseInt(str[0]);
  var y = parseInt(str[1]);
  var a = parseInt(str[2]);
  var b = parseInt(str[3]);

  var val1, val2, factor_val, ans, ax, by, number_of_turns;
  let val = 0;
  let z = 0;

  if (a > x){
    if (b > y){
      val1 = b - y;
    }
    val2 = a - x;
  }

  // get the factorial of the number of must do moves

  val = val1 + val2;
  factor_val = val - 1;
  ans = val;
  for (z = 0; z < val; z++){
    if (factor_val >= 1){
      ans *= factor_val;
      factor_val -= 1;
    }
    else {
      break;
    }
  }

  // get the factorial product of the two numbers that make the difference ie val1 and val2

  if (val1 > 1){
    ax = val1;
    factor_val = val1 - 1;
    for (z = 0; z < val1; z++){
      if (factor_val >= 1){
        ax *= factor_val;
        factor_val -=1;
      }
      else{
        break;
      }
    }
  }
  else {
    ax = 1;
  }

  if (val2 > 1){
    by = val2
    factor_val = val2 - 1;
    for (z = 0; z < val1; z++){
      if (factor_val >= 1){
        by *= factor_val;
        factor_val -= 1;
      }
      else{
        break;
      }
    }
  }
  else{
    by = 1;
  }

  number_of_turns = ans / (ax * by);
  return number_of_turns;
}

document.getElementById('result').innerHTML = chessboardTraveling();
