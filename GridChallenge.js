function gridChallenge(grid) {
  // Write your code here:
  grid.forEach((item, index, arr) => {
    arr[index] = item.split("").sort();
  });
  for (let i = 0; i < grid.length - 1; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j] > grid[i + 1][j]) {
        return "NO";
      }
    }
  }
  return "YES";
}
const grid = ["ebacd", "fghij", "olmkn", "trpqs", "xywuv"];
console.log(gridChallenge(grid));
