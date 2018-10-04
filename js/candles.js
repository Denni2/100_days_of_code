maxHeight = arr => {
  arr = [3, 2, 1, 3];

  let val = arr.sort((a, b) => b - a).filter(a => a === arr[0]).length;
  console.log(val);


}

document.getElementById('app').innerHTML = maxHeight();


/* using filter.array



.sort((a, b) => b - a);
let count = 0;

for (x = 0; x < arr.length; x++){
  arr[x] == arr[0] ? count += 1 : x++;
}
console.log(count);

*/
