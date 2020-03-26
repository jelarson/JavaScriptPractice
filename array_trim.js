arr = [1, 2, 3, 4, 5]

function arrayTrim(arr) {
  if (arr.length > 1) {
    arr.shift()
    arr.pop()
  } else {
    return `Array is to short to trim`
  }
  return arr
}

console.log(arrayTrim(arr));
console.log(arrayTrim(arr));
console.log(arrayTrim(arr));

