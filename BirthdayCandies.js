function birthdayCakeCandles(candles) {
  // Write your code here
  candles.sort((a, b) => a - b);
  let hm = new Map();
  let max = 0;
  candles.forEach((candle) => {
    hm.set(candle, hm.get(candle) + 1 || 1);
    if (hm.get(candle) > max) {
      max = hm.get(candle);
    }
  });
  console.table(hm)
//   console.log(max);
}
const candles = [3, 2, 1, 3]; // output : 3
birthdayCakeCandles(candles);

function birthdayCakeCandles1(arr) {
  // Complete this function
  var max = Math.max(...arr);
  var result = arr.filter((element) => element === max);
  return result.length;
}
const arr = [3, 2, 1, 3]; // output : 3
console.log(birthdayCakeCandles1(arr));
