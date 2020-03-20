// Function should remove all values from list a, which are present in list b.

// arrayDiff([1,2],[1]) == [2]

function arrayDiff(a, b) {
  if (b.length === 0) {
    return a
  } else {
    return a.filter((item) => {
      let result = true
      for (x of b) {
        if (x === item) {
          result = false
        }
      }
      return result
    })
  }
}

// console.log(arrayDiff([1, 2, 2, 3, 4], [2]))
// console.log(arrayDiff([1, 2, 2, 3, 4], []))
// console.log(arrayDiff([11, 13, 20, 2, 12, -17, -19], [2, -19, 12, 20, 13])) // [11, -17]


// arr = [1, 2, 2, 3, 2, 4, 2, 5]

// console.log([...new Set(arr)])


function arrayDiff1(a, b) {
  if (b.length === 0) {
    return a
  } else {
    return a.filter((item) => {
      return !b.some(bItem => bItem === item)
    })
  }
}


console.log(arrayDiff1([1, 2, 2, 3, 4], [2]))
console.log(arrayDiff1([1, 2, 2, 3, 4], []))
console.log(arrayDiff1([11, 13, 20, 2, 12, -17, -19], [2, -19, 12, 20, 13])) // [11, -17]