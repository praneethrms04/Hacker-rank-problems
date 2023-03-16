const diagonalDifference = (arr, n) => {
  let d1 = 0;
  let d2 = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i == j) {
        d1 += arr[i][j];
      }
      if (i == n - j - 1) {
        d2 += arr[i][j];
      }
    }
  }
  console.log(Math.abs(d1 - d2));
};

const diagonalDifference1 = (arr, n) => {
  let d1 = 0;
  let d2 = 0;
  for (let i = 0; i < n; i++) {
    d1 += arr[i][i];
    d2 += arr[i][n - i - 1];
  }
  console.log(Math.abs(d1 - d2));
};

function diagonalDifference2(arr) {
  let diag1 = 0;
  let diag2 = 0;
  const len = arr.length;
  arr.forEach((ele, ind) => {
    diag1 += ele[ind];
    diag2 += ele[len - 1 - ind];
  });
  console.log(Math.abs(diag1 - diag2));
}
const arr = [
  [1, 2, 3],
  [4, 6, 6],
  [9, 8, 9],
];
const n = 3;
// diagonalDifference(arr, n);
// diagonalDifference1(arr, n);
diagonalDifference2(arr)
