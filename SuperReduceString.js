function superReducedString(s) {
  // Write your code here
  var chars = s.split("");
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === chars[i + 1]) {
      chars.splice(i, 2);
      return superReducedString(chars.join(""));
    }
  }
  return s.length > 0 ? s : "Empty String";
}
const s = "aaabccddd";
console.log(superReducedString(s));

const str = "aaabccddd";
// let arr = ["a", "a", "a", "b", "c", "c", "d", "d", "d"];
const arr = ["a","a"]

for (let i = 0; i < arr.length; i++) {
    let count = 0
  if (arr[i] === arr[i + 1]) {
    arr.splice(i,  2)
    return 
  }
  
}
console.log(arr)
