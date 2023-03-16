const theLoveLetterMystery = (str) => {
  let charCodes = str.split("").map((char) => char.charCodeAt(0));
  let revCharCodes = [...charCodes].reverse();
  let count = 0;
  if (charCodes.join("") !== revCharCodes.join("")) {
    charCodes.forEach((val, ind) => {
      if (revCharCodes[ind] > val) {
        count += revCharCodes[ind] - val;
      }
    });
  } else {
    return 0;
  }
  return count;
};
const str = "abc";
console.log(theLoveLetterMystery(str));
