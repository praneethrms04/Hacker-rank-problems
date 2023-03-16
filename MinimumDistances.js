const MinimumDistances = (arr) => {
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr1.push(Math.abs(i - j));
      }
    }
  }
  if (arr1.length === 0) {
    return -1;
  }
  return Math.min(...arr1);
};
const arr = [3, 2, 1, 2, 3];
console.log(MinimumDistances(arr));
