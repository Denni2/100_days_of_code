function buildTower(floorNums){
  /*
     *
    ***
   *****
  *******
  is the result I want to have at displayed
*/
let arr = [], val = "*", new_val = "", spaces = " ", x = 1;
var vals;

// code executed when floorNums is either <= 0  or 1 or greater than one
if (floorNums <= 0){
  return "";
}

else if (floorNums == 1) {
  arr.push(val);
  return arr;
}

else {
  // get the length of spaces representative of the whole tree line as demonstrated above
  let len = floorNums * 2 - 1, space_val = 0;

  // while loop to cater for every hierarchy of the treeline
  while (x <= floorNums){
    vals = val.repeat(x * 2 - 1);
    space_val = (len - vals.length) / 2;

    // remove comments to see what happens with every loop
    /*console.log("current val " + x);
    *console.log("current length " + vals.length);
    *console.log("difference " + space_val);
    */

    new_val = spaces.repeat(space_val) + vals + spaces.repeat(space_val);
    console.log(new_val);
    arr.push(new_val);
    x++;
  }
  return arr;
}
}

document.getElementById("app").innerHTML = buildTower(1);
