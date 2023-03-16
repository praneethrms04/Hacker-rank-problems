function divisibleSumPairs(k, ar) {
  // Write your code here
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i < j) {
        if ((ar[i] + ar[j]) % k == 0) {
          console.log(ar[i], ar[j]);
          // count++;
        }
      }
    }
  }
  console.log(count);
}
// const ar = [1, 2, 3, 4, 5, 6];
const ar = [1, 3, 2, 6, 1, 2];
const n = ar.length;
const k = 3;
divisibleSumPairs(k, ar);

// const solution = (length, m, arr) => {
//   let result;
//   for(let i=0; i<length; i++){
//     result =  arr.slice(i+1, length)
//     console.log(result)
//   }
// };
// const arr = [1, 3, 2, 6, 1, 2];
// const length = arr.length;
// const m = 3;
// solution(length, m, arr);
