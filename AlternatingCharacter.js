function alternatingCharacters(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    }
  }
  return count;
}
const str = "AAABBB";
console.log(alternatingCharacters(str));
