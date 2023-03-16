function beautifulBinaryString(str) {
  // Write your code here:
  let count = 0;
  for (let i = 1; i < str.length - 1; i++) {
    if (str[i - 1] === "0" && str[i] === "1" && str[i + 1] === "0") {
        count++
        i = i + 2
    }
  }
  console.log(count)
  //    let arr =  str.split('010').length - 1
  //    console.log(arr)
}
const str = "0100101010";
beautifulBinaryString(str);
