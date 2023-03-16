function repeatedString(str, n) {
  let occurances = str.split("a").length-1
  let max = Math.floor(n/str.length)
  let repeat = occurances * max
  repeat += (str.slice(0, n % str.length).split("a").length - 1);
  console.log(repeat)
}
const str = "aba";
const n = 10;
repeatedString(str, n);

// let occurances = (s.split("a").length - 1);
// let max = Math.floor(n / s.length);
// let repeats = occurances * max;
// repeats += (s.slice(0, n % s.length).split("a").length - 1);
// return repeats;
