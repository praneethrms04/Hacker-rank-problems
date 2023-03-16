// const migratoryBirds = (arr) => {
//   arr.sort((a, b) => a - b);

//   let hm = new Map();
//   let maxNum = 0;
//   let maxChar = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (hm.has(arr[i])) {
//       let count = hm.get(arr[i]);
//       count++;
//       hm.set(arr[i], count);
//     } else {
//       hm.set(arr[i], 1);
//     }
//   }
//   console.table(hm);
//   for (var num in hm) {
//     if (hm[num] > maxNum) {
//       maxNum = hm[num];
//       maxChar = num;
//     }
//   }
//   // return maxChar;
//   console.log(maxChar);
// };
// const arr1 = [1, 4, 4, 4, 5, 3];
// migratoryBirds(arr1);

const solution = (arr) => {
  arr.sort((a, b) => a - b);
  let hm = new Map(),
    max = 0,
    type = arr[0];

  arr.forEach((bird, i) => {
    hm.set(bird, hm.get(bird) + 1 || 1);
    if (hm.get(bird) > max) {
      max = hm.get(bird);
      type = bird;
    }
  });
  console.table(hm);
  console.log(type);
};
// const arr = [1, 4, 4, 4, 5, 3];
// solution(arr);

// function migratoryBirds(arr) {
//   arr.sort(function (a, b) {
//     return a - b;
//   });
//   const numMap = {};
//   var maxNum = 0;
//   var maxChar = 0;
//   for (var num of arr) {
//     if (numMap[num]) {
//       numMap[num]++;
//     } else {
//       numMap[num] = 1;
//     }
//   }
//   console.table(numMap)
//   for (var num in numMap) {
//     if (numMap[num] > maxNum) {
//       maxNum = numMap[num];
//       maxChar = num;
//     }
//   }
//   // return maxChar;
//   console.log(maxChar);
// }

const arr = [1, 4, 4, 4, 5, 3];
migratoryBirds(arr);
