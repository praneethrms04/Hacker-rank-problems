function pageCount(n, p) {
  const pageTurns = Math.floor(p / 2);
  const totalTurns = Math.floor(n / 2);
  console.log(Math.min(pageTurns, totalTurns - pageTurns));
}
const n = 11;
const p = 4;
pageCount(n, p);
