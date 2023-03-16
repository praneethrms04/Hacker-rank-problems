// const gameOfStones = (n) => {
//   var ar = Array(100);
  

//   for (let i = 7; i <= n; i++) {
//     if (ar[i - 2] || ar[i - 3] || ar[i - 5]) ar[i] = 0;
//     else ar[i] = 1;
//     console.log(ar, i);
//   }
// };
// console.log(gameOfStones(8));
const gameOfStones = (n) => n % 7 <= 1 ? "Second" : "First"