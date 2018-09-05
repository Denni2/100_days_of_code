getOpposite = (s1, s2) => {
  s1 = "";
  s2 = "";

  console.log(s1.length);

  // get the length of the two strings
  if (s1.length == s2.length && s1.length != 0){
    // loop through the strings and compare whether the values are Opposites
    for (x = 0; x < s1.length; x++){
      // check whether the two values are equal
      if (s2[x] == s1[x].toLowerCase() && s2[x] != s1[x]){
        continue;
      }
      else if (s2[x] == s1[x].toUpperCase() && s2[x] != s1[x]) {
        continue;
      }
      // anything that is not a word will return a false
      else if (s1[x].match(/[\W]/gi) || s2[x].match(/[\W]/gi)){
        return false;
      }
      else {
        return false;
      }

    }
  }
  else{
    return false;
  }
  return true;


}
document.getElementById('app').innerHTML = getOpposite();
