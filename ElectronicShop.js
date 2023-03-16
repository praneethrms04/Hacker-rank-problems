function getMoneySpent(keyboards, drives, b) {
  let arr = [];
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      if (keyboards[i] + drives[j] <= b) {
        arr.push(keyboards[i] + drives[j]);
      }
    }
  }
  return arr.length ? Math.max(...arr) : -1;
}
const keyboards = [5];
const drives = [5];
const b = 4;
console.log(getMoneySpent(keyboards, drives, b));
