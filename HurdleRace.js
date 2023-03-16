function hurdleRace(k, height) {
  let dose = Math.max(...height) - k;
  return dose > 0 ? dose : 0;
}
const k = 5;
const height = [1, 2, 3, 4, 6];
console.log(hurdleRace(k, height));
