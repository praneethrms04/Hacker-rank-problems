const TimeConversion = (s) => {
  let AMPM = s.slice(-2);
  let arr = s.slice(0, -2).split(":");
  if (AMPM === "AM" && arr[0] === "12") {
    arr[0] == "00";
  } else if (AMPM === "PM") {
    arr[0] = (arr[0] % 12) + 12;
  }
  console.log(arr.join(":"));
};
const s = "07:05:45PM";
TimeConversion(s);
