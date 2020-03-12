// sum array items
// find length of array
// divide sum by length

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8]

function arrayAvg(arr) {
  return (arr.reduce((a, b) => a + b, 0)) / arr.length
}

console.log(arrayAvg(arr))

// Jordan's solution

const getAverage = arr => {
  // sum array values
  const sum = arr.reduce((total, currentValue) => total + currentValue);
  return sum / arr.length;
  // get length of array
  // divide the array sum by length
}

console.log(getAverage(arr))
// Ryan's solution

avg = arr => arr.reduce((x, y) => x + y, 0) / arr.length
console.log(avg(arr))