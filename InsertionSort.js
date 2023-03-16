const insertionSort = (arr) => {
  for (var i = 1; i < arr.length; i++) {
    var currVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currVal;
  }
  return arr;
};
console.log(insertionSort([4, 2, 5, 8, 1, 6]));
