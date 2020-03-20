// Only return the only one of the unique nums for 2 combined arrays

function arrayDiff1(a, b) {
  newArr = a.push(...b)
  return [...new Set(a)]
}

console.log(arrayDiff1([1, 2, 2, 3, 4], [2, 3]))
console.log(arrayDiff1([1, 2, 2, 3, 4], [1, 2, 3, 4, 4, 5]))
