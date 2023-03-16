function hackerrankInString(str) {
  // Write your code here:
  //   return /.*h.*a.*c.*k.*e.*r.*r.*a.*n.*k/g.test(str)? 'YES' : 'NO'
  let resStr = "hackerrank";
  let index = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == resStr[index]) {
      index++;
      if (resStr.length === index) {
        return "YES";
      }
    }
  }
  return "NO";
}
const str = "hhaacckkekraraannk";
console.log(hackerrankInString(str));
