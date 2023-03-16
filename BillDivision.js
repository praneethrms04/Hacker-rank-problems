function bonAppetit(bill, k, b) {
  const fairlyCost = (bill.reduce((sum, cost) => sum + cost, 0) - bill[k]) / 2;
  console.log(fairlyCost < b ? b - fairlyCost : "Bon Appetit");
}
const BillDivision = (bill, k, b) => {
    let sum =  0;
  for (let i = 0; i < bill.length; i++) {
    sum += bill[i];
  }
  total = (sum - bill[k]) / 2;

  if (b <= total) {
    return "Bon" + " " + "Appetit";
  } else {
    return b - total;
  }
};
const bill = [3, 10, 2, 9];
const b = 7;
const k = 1;
console.log(BillDivision(bill, k, b));
bonAppetit(bill, k, b);
