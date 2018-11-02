getGrades = grades => {
  grades = [73, 67, 38, 33];
  new_grades = [];

  for (x = 0; x < grades.length; x++){
    let val = grades[x];
    if (grades[x] >= 40){
      if ((5 - (val % 5)) < 3 && (5 - (val % 5)) > 0){
        new_grades.push(val + (5 - (val % 5)));
      }
      else {
        new_grades.push(val);
      }
    }
    else {
      if (val >= 38 && val < 40){
        new_grades.push(40);
      }
      else {
        new_grades.push(val);
      }
    }
  }
  return new_grades;
}

document.getElementById('app').innerHTML = getGrades();
