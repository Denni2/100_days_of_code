function uniqueOrder (val){
  val = "ADAAAAAABBBBBBBBBCCCCCCFGFGFGFG";

  // check whether val is an array or not
  !Array.isArray(val) ? val = val.split('') : val;

  let len = val.length, counter = 0, x = 0, last = val.length - 1;

  while (counter < len){
    if (x + 1 !== last){
      val[x] == val[x + 1] ? val.splice(x, 1) : x++;
    }
    else {
      if (val[x] == val[x + 1]){
        val.splice(x, 1);
      }
      break;
    }
    counter++;
  }
  return val;
}

document.getElementById('app').innerHTML = uniqueOrder();
