function maximumPerimeterTriangle(sticks) {
  sticks.sort((a,b) => a - b)
  for (let i = sticks.length - 1; i > 1; i--) {
      if (sticks[i] < sticks[i-1] + sticks[i-2]) {
          return sticks.slice(i-2, i+1)
      }
  }
  return [-1]
}

const sticks = [1, 1, 1, 3, 3];
console.log(maximumPerimeterTriangle(sticks));
