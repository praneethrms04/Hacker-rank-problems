function minimumNumber(n, password) {

  const [...arr] = [/[0-9]/g, /[a-z]/g, /[A-Z]/g, /[\W]/g]; // regular expression
  let count = 0;
  arr.forEach((element, ind)=>{
    password.match(element) ? count++ : null
  })
  return Math.max(6 - n, 4 - count);
}
const n = 11;
const password = "#HackerRank";
console.log(minimumNumber(n, password));
