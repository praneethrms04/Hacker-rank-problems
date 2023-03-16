function pangrams(str) {
  // Write your code here:
  let splitestr = str.split(" ").join("").toLowerCase().split("").sort();
  let uniquestr = [...new Set(splitestr)];
  return uniquestr.length < 26 ? "not pangram" : "pangram";

  // write your code here:

  let length = new Set(str.toLowerCase().match(/[a-z]/gi)).size
  return length === 26 ? "pangram" : "not pangram"
  
}
const str = "The Quick brown fox jumps over the lazy dog ";
console.log(pangrams(str));
