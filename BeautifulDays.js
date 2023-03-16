function beautifulDays(i, j, k) {
  let beautifuldays = 0;
  for (let x = i; x <=j; x++) {
    if ((Math.abs(x - Number(String(x).split('').reverse().join('')))) % k === 0) {
      beautifuldays++;
    }
  }
  return beautifuldays;
}
console.log(beautifulDays(20, 23, 6));
console.log("Hello")
// Math.abs(x - Number(String(x).split("").reverse().join(""))) % k === 0
