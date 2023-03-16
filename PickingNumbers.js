function pickingNumbers(arr) {

  let maxCount = 0;
  for (let i = 0; i < arr.length; i++) {
     let count = 0;
     for (let j = 0; j < arr.length; j++) {
        if (arr[i] == arr[j] || arr[i] + 1 == arr[j]) {
           count++;
        }
     }
     if (count > maxCount) {
        maxCount = count;
     }
  }
  return maxCount;

  // using inbuilt
  let count = 0;
  arr.forEach((element) => {
    const subArr = arr.filter(
      //   (subele) => element == subele || element + 1 == subele
      (subele) => element - subele === 0 || element - subele === 1
    );
    console.log(subArr);
    if (subArr.length > count) {
      count = subArr.length;
    }
  });
  console.log(count);
}
function pickingNumbers(a) {
  let freq = new Array(100).fill(0);
  for (let i = 0; i < a.length; i++) {
    freq[a[i] - 1]++;
    //    console.log(freq)
  }
  let maxCount = 0;
  for (let i = 0; i < 100; i++) {
    // Step 3
    let count = freq[i] + freq[i + 1];
    if (count > maxCount) {
      maxCount = count;
    }
  }
  //    return maxCount;
  console.log(maxCount);
}
const arr = [1, 2, 2, 3, 1, 2];
pickingNumbers(arr);
