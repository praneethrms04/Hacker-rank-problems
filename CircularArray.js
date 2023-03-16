const CircularArray = (a, k, queries) => {
  for (let i = 0; i < k; i++) {
    let lastElement = a.pop();
    a.unshift(lastElement);
  }
  for (let j = 0; j <= k; j++) {
    console.log(a[j]);
  }
  //   return queries.map(q => a[q]);
};
const a = [1, 2, 3];
const k = 2;
const queries = 3;
console.log(CircularArray(a, k, queries));
