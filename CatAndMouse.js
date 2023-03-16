function catAndMouse(x, y, z) {
  let stepsOfCatA = Math.abs(x - z);
  let stepsOfCatB = Math.abs(y - z);
  if(stepsOfCatA < stepsOfCatB){
    return "Cat A"
  }else if(stepsOfCatA > stepsOfCatB){
    return "Cat B"
  }else{
    return "Mouse C"
  }
}
console.log(catAndMouse(1, 2, 3));
console.log(catAndMouse(1,3,2));

