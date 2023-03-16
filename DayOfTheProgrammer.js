function dayOfTheProgrammer(year) {
  // Only 3 possible dates: 1918, leap year and not leap year
  //   if (year === 1998) {
  //     return `26.09.${year}`;
  //   } else if (year < 1998) {
  //     if (year % 4 === 0) {
  //       return `12.09.${year}`;
  //     } else {
  //       return `13.09.${year}`;
  //     }
  //   } else if (year > 1998) {
  //     if (year % 4 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
  //       return `12.09.${year}`;
  //     } else {
  //       return `13.09.${year}`;
  //     }
  //   }

  // approach 2:
  if (year < 1918) {
    let days = year % 4 === 0 ? 244 : 243;
    return 256 - days + ".09." + year;
  } else if (year > 1918) {
    let days =
      (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 244 : 243;
    return 256 - days + ".09." + year;
  } else {
    return "26.09.1918";
  }
}
const year = 1800;
console.log(dayOfTheProgrammer(year));
