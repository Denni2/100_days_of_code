getPairs = (n, ar) => {
  n = 10;
  ar = "1 1 3 1 2 1 3 3 3 3";
  let count = 0, ans = 0;
  ar = ar.split(' ').sort();
  console.log(ar);

  for (x = 0; x < ar.length; x++){
    for (y = 0; y < ar.length; y++){
      if (ar[y] == ar[x] && ar[x] != ar[x - 1]){
        count += 1;
        console.log(count + " " + ar[x]);
      }
    }
    if (count > 1){
      if (count % 2 == 0){
        ans += count / 2;
      }
      else {
        ans += (count - 1) / 2;
      }
    }
    count = 0;
    x = ar.lastIndexOf(ar[x]);
  }

  return ans;

  /* expected result
   * 1 pair of size 1 socks
   * 1 pair of size 2 socks
   * total 2 pairs of sellable socks.
   */

}

document.getElementById('app').innerHTML = getPairs();
