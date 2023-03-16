function minimumAbsoluteDifference(arr) {
  let smallest = Infinity;
  arr.sort((a, b) => {
    smallest = Math.min(smallest, Math.abs(a - b));
    return a - b;
  });

  return smallest;
}


const arr = [3, -7, 0];
console.log(minimumAbsoluteDifference(arr));
