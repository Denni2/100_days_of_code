phoneNumber = (num) => {
  /* have an array that accepts 10 integers
   * and returns a string of the numbers in the form of a phone number
   * this should be the format (xxx) xxx-xxxx
   */
   num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
   if (num.length == 10){
     num.toString().split('')
     num.splice(0, 0, '(');
     num.splice(4, 0, ')');
     num.splice(5, 0, " ");
     num.splice(9, 0, "-");
     num = num.join('').toString();
   }
   else{ return ""};
   return num;
   console.log(num);
}

document.getElementById('phones').innerHTML = phoneNumber();
