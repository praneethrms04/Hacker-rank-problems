function designerPdfViewer(arr, word) {
  let maxHeight = 0;
  for (let char of word.toUpperCase()) {
    let charHeight = arr[char.charCodeAt(0) - 65];
    if (charHeight > maxHeight) maxHeight = charHeight;
  }
  return word.length * maxHeight;
}
const arr = [
  1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7,
]
const word = "zabc";
console.log(designerPdfViewer(arr, word));
