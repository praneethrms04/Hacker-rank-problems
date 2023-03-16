const CountingValley = (arr) => {
  let current = 0;
  let vCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "U") {
      current++;
      if (current == 0) {
        vCount++;
      }
    } else {
      current--;
    }
  }
  console.log(vCount)
};
const arr = ["U", "D", "D", "D"];
CountingValley(arr);
