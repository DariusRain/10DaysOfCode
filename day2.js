// 10 Days of code
// https://www.hackerrank.com/challenges/js10-if-else/problem
function getGrade(score) {
    //             0    5   10   15
  const grades = ["F", "E", "D", "C", "B", "A"];
  if (score > 30) {
    return grades[grades.length - 1];
  } 
  if(score < 0) 
  {
      return grades[0]
  }
  const gradeIndex =
    score % 5 === 0
      ? Math.round(score / 5)
      : Math.round((score - (score % 5)) / 5);

  return grades[gradeIndex];
}
console.log(getGrade(3));
