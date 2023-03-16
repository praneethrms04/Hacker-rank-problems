function miniMaxSum(arr) {
  let min = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  for (let i = 0; i < arr.length - 1; i++) {
    min += arr[i];
    max += arr[i + 1];
  }
  console.log(min, max);
}

// const arr = [1, 3, 5, 7, 9]; // 16 24
// miniMaxSum(arr);

function solution(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce((prev, curr) => prev + curr);
  console.log(sum - max, sum - min);
}
const arr = [1, 3, 5, 7, 9]; // 16 24
solution(arr);
