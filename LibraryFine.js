function libraryFine(d1, m1, y1, d2, m2, y2) {
  // let fine = 0;
  if (y1 < y2 || (y1 == y2 && m1 < m2) || (y1 == y2 && m1 == m2 && d1 <= d2)) {
    return 0;
  }
  if (y2 == y1) {
    if (m1 == m2) {
      return 15 * (d1 - d2);
    } else {
      return (m1 - m2) * 500;
    }
  } else {
    return 10000;
  }
  // return 0
}

let d1 = 14;
let m1 = 7;
let y1 = 2018;
let d2 = 5;
let m2 = 7;
let y2 = 2018;
console.log(libraryFine(d1, m1, y1, d2, m2, y2));
