const birthday = (arr, day, month) => {
  // Write your code here
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let str = arr.slice(0 + i, month + i);
    console.log(str);
    if (str.reduce((a, b) => a + b) === day) {
      count++;
    }
  }
  console.log(count);
};
const arr = [1, 2, 1, 3, 2];
const day = 3;
const month = 2;
birthday(arr, day, month);

// 0 =>[ 1, 2], 1=> [ 2, 2] 2=> [ 1,3 ], 3=> [3, 2] 4=> [2, ]
