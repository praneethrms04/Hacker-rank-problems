function angryProfessor(k, a) {
  const counter = a.filter(arrivedTime => arrivedTime <= 0).length;
  return counter >= k ? "NO" : "YES"
}

const k = 2;
const a = [0, -1, 2, 1];
console.log(angryProfessor(k, a));
