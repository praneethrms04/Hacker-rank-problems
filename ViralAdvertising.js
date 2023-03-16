function viralAdvertising(n){
    let liked= 0;
    let cummLikes = 0;
    let shared = 5;
    for(let i=1; i<=n; i++){
      liked = Math.floor(shared / 2 ) 
      shared = liked * 3          
      cummLikes = cummLikes + liked 
    }
    console.log(cummLikes)
}
const n = 3;
viralAdvertising(n)
console.log(Math.floor(9/2))