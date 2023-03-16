const MarsExploration = (str) => {
//   let arr = str.slice(0, 3);

  let splittedarr = "SOS".repeat(str.length / 3);
  let count = 0
  console.log(splittedarr)
  for(let i=0; i<str.length; i++){
    if(str[i] !== splittedarr[i]){
        count++
    }
  }
  console.log(count)
};
const str = "SOSSOSSOS";
MarsExploration(str);
