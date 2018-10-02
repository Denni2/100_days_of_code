stairs = n => {
  n = 10;

  for (x = 0; x < n; x++){
    console.log(" ".repeat(n - x - 1) + "#".repeat(x + 1));
  }

}

document.getElementById('app').innerHTML = stairs();

/*
var aux = 0;

    while (aux < n){
        console.log(" ".repeat(n-aux-1) +
        "#".repeat(aux+1));
        aux++;
    }

*/
