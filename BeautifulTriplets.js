function beautifulTriplets(d, arr) {
  // Write your code here:
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(arr[i] + d) && arr.includes(arr[i] + d * 2)) {
      count++;
      //   console.log(i);
    }
  }
  console.log(count);

//   let count = 0
//    for (let i = 0; i < arr.length - 2; i++) {
//       for (let j = i + 1; j < arr.length - 1; j++) {
//          for (let k = j + 1; k < arr.length; k++) {
//             if (arr[j] - arr[i] === d && arr[k] - arr[j] === d) {
//                count++
//             }
//          }
//       }
//    }
//    return count

// let count = 0, map = {}
//    for (let i = 0; i < arr.length; i++) {
//       map[arr[i]] = true
//    }
//    for (let i = 0; i < arr.length; i++) {
//       if (map[arr[i] + d] && map[arr[i] + d * 2]) {
//          count++
//       }
//    }
//    return count

}
const arr = [2, 2, 3, 4, 5];

const d = 1;
beautifulTriplets(d, arr);
