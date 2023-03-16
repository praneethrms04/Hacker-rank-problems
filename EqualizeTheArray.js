const EqualizeTheArray = (arr) => {
  let occurance = 0;
  arr.forEach((ele) => {
    let len = arr.filter((item) => item === ele).length;
    if (len > occurance) {
      occurance = len;
    }
  });
  return arr.length - occurance;
};
const arr = [1, 3, 2, 3, 3];
console.log(EqualizeTheArray(arr));
