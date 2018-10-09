getTitle = (words, exes) => {
  words = 'This is such a fun project for me'.toLowerCase().split(' ');
  exes = 'is a'.toLowerCase().split(' ');


  for (x = 0; x < words.length; x++){
    let val = words[x];

    if (exes.includes(val) && x > 0){
      words[x] = words[x].toLowerCase();
    }
    else {
      words[x] = words[x].charAt(0).toUpperCase() + words[x].slice(1);
    }
  }
  words = words.join(' ').toString();
  return words;

}
document.getElementById('app').innerHTML = getTitle();


/*
  ************************* another ********************
  let arr = [];

  for (x of words){
    exes.includes(x) && words.indexOf(x) > 0 ?
    x = x.toLowerCase()  :
    x = x.charAt(0).toUpperCase() + x.slice(1);
    arr.push(x);
  }
  arr = arr.join(' ');


  console.log(arr);

}

  */
