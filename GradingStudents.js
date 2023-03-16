function gradingStudents(grades) {
let result  = grades.map((grade) => {
    let difference = 5 - (grade % 5);
    if (difference < 3 && grade >= 38) {
      grade = grade + difference;
    }
    return grade
  });
  console.log(result)
}

const grades = [73, 67, 38, 33];
gradingStudents(grades);

const solution = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let difference = 5 - (arr[i] % 5);
    if (difference < 3 && arr[i] >= 38) {
      arr[i] = arr[i] + difference;
    }
  }
    console.log(arr);
};
const arr = [73, 67, 38, 33];
solution(arr);
