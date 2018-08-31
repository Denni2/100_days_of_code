shortestString = s => {
  s = "Well the coolest ninja this side of Karuturi";

  /* find the smallest string in a set of striings
    /* to get the smallest value
     *
     * let val = s.toLowerCase().split(" ").sort((a, b) => a.length - b.length);
     */

  let val = s.split(" ").map(a => a.length);
  let ans = Math.min(...val);
  console.log(val);
  console.log(ans);


}

document.getElementById("app").innerHTML = shortestString();
