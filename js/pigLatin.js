function changeWords(str){
  str = "I is the coolest !";
  console.log(str);
  /* move the first letter of every word to the end of it
  *  add 'ay' to the end of the word
  *  leave punctuation marks untouched
  */

  str = str.split(' ');

  // move all first letters to last and add 'ay'
  let last = str.length, x = 0, arr = [];

  while (x < str.length){

    if (str[x].match(/[A-z]/gi)){
      arr = str[x].split('');
      var first = arr.shift();
      arr.splice(arr.length, 0, first + "ay");
      str[x] = arr.join('').toString();
    }

    x++;
  }
  str = str.join(" ");
  console.log(str);



}

document.getElementById('app').innerHTML = changeWords();
