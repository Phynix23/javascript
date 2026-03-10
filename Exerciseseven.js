// Exercise 7: Grade Classifier

function getGrade(score) {
  if (score >= 90) {
     console.log(`${score}: Grade A`);
  } else if (score >= 80) {
    console.log(`${score}: Grade B`);
  } else if (score >= 70) {
    console.log(`${score}: Grade C`);
  } else if (score >= 60) {
    console.log(`${score}: Grade D`);
  } else {
    console.log(`${score}: Grade F`);
  }
}

getGrade(95)
getGrade(83)
getGrade(71)
getGrade(58)
getGrade(100)