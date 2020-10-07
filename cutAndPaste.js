//  CUT AND PASTE - 

const cutAndPaste = (arr, num) => {
  for (let i = 0; i < num; i++) {
    arr.push(arr.shift());
  }
  return arr;
}

console.log(cutAndPaste([1, 2, 5, "help", "wow", 3], 1))

module.exports = {
  cutAndPaste
};
