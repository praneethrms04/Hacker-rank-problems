function marcsCakewalk(calorie) {
  calorie.sort((a, b) => a - b);
  calorie.reverse();
  let sum = 0;
  for (let i = 0; i < calorie.length; i++) {
    // 0+ 3* 2 power 0 = 3
    sum = sum + Math.pow(2, i) * calorie[i];
  }
  console.log(sum);
}
const calorie = [5, 10, 7];
marcsCakewalk(calorie);
