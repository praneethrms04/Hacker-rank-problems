// every element:
const IsGreatherthanOne = (element, index) => {
  return index < 10;
};
const arr = [1, 2, 3, 4, 4];

// console.log(arr.every(IsGreatherthanOne));
// subset :

const isSubset = (arr1, arr2) => {
  return arr2.every((element) => arr1.includes(element));
};
// const arr1 = [2, 4, 4];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// console.log(isSubset(arr1, arr2));

// console.log(
//   arr1.every((element) => {
//     if (element % 2 == 0) {
//       return true;
//     } else {
//       return false;
//     }
//   })
// );

// problem- solution:


const FindSolution = (arr1, arr2) => {
  let count = 0;
  for (let i = 1; i <= 100; i++) {
    if (arr1.every((element) => i % element == 0)) {
      if (arr2.every((element) => element % i == 0)) {
        count++;
      }
    }
  }
  console.log(count);
};
const arr1 = [2, 4];
const arr2 = [16, 32, 96];
FindSolution(arr1, arr2);
