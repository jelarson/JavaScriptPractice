// Function should remove all values from list a, which are present in list b.

// arrayDiff([1,2],[1]) == [2]

function arrayDiff(a, b) {
  if (b.length === 0) {
    return a
  } else {
    return a.filter((item) => {
      for (x of b) {
        return x !== item
      }
    })
  }
}

console.log(arrayDiff([1, 2, 2, 2, 2, 3, 4], [2]))
console.log(arrayDiff([1, 2, 2, 2, 2, 3, 4], []))
console.log(arrayDiff([11, 13, 20, 2, 12, -17, -19], [2, -19, 12, 20, 13])) // [11, -17]
