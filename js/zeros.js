moveZeros = arr => {
  //arr = [false, 1, 3, 55, 7, 0, 45, 32, 0, 67, 0, 113, 54, 0, 22, 78, 56, 0];
  arr = ['a', 0, 0, 'b', 'c', 'd', 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9];

  /*
   * move all the zeros to the end
   *
   */

   let new_arr = arr.filter(a => { return a != 0 });
   let val = arr.filter(a => {return a == 0});

   while (val.length){
     new_arr.push(0);
     val.length--;
   }
   return new_arr;
}
document.getElementById('app').innerHTML = moveZeros();
