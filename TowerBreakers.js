function towerBreakers(n,m) {
    return m === 1 || n%2 === 0 ? "2" : "1";
}
const n = 2;
const m = 6;
console.log(towerBreakers(n,m))