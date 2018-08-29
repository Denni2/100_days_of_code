getWord = (str1, str2) => {
  str1 = 'abcdefghijkl'.split('');
  str2 = 'gds'.split('');

  let counter = {};

  for (x = 0; x < str1.length; x++){
    var counterVal = str1[x];
    counter[counterVal] = counter[counterVal] || 0;
    counter[counterVal]++;
    //console.log(counter);
  }
  console.log(counter);

  for (x = 0; x < str2.length; x++){
    var counterVal = str2[x];

    if (counter[counterVal] > 0){
      counter[counterVal]--;
      console.log(counter);
    }
    else{
      return false;
    }

  }
  console.log(counter);

  return true;


}


document.getElementById('app').innerHTML = getWord();




/*

****** solution ii *******

getWord = (str1, str2) => {
  str1 = 'abcdefghijkl'.split('');
  console.log(str1);
  str2 = 'gd'.split('');
  /*
   * my function should return true if a portion of
   * str1 characters can be rearranged to match str2
   * otherwise returns false


  let ans = str2.every(checker => {
    return str1.includes(checker);
  });
  console.log(ans);
  return ans;
}

works but does not cater for repitions
also the most compact of them all

*/


/*

***** solution 3 play abouts *****
str1 = 'abcdefghijklmno'.split('');
str2 = 'bsad'.split('');

let x = 0, val = false;

while (x < str2.length){
  if (str1.includes(str2[x])){
    console.log(str2[x]);
    val = true;
  }
  else{
    val = false;
    break;
  }
  x++;
}
return val;

 looking for alternative ways to solve the code
*/


/*

var val;

for (x = 0; x < str2.length; x++){
  if (str1.includes(str2[x])){
    val = true;
  }
  else {
    val = false;
    break;
  }
}
return val;
*/
