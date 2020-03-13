// Write a JS program that will create a new array from the two that
// are given. The new array should include every possible combination
// between the two supplied.
// IE: [1, 2], ["a", "b"] => [[1, "a"], [1, "b"], [2, "a"], [2, "b"]]

// Create empty new array
// Loop over each array and pull out elements
// add elements in pairs to new array

arrayOne = [1, 2]
arrayTwo = ["a", "b"]

newArray = [[], [], [], []]

function arranger(arrayOne, arrayTwo) {
  newArray[0].push(arrayOne[0])
  newArray[1].push(arrayOne[0])
  newArray[2].push(arrayOne[1])
  newArray[3].push(arrayOne[1])

  newArray[0].push(arrayTwo[0])
  newArray[1].push(arrayTwo[1])
  newArray[2].push(arrayTwo[0])
  newArray[3].push(arrayTwo[1])
}

arranger(arrayOne, arrayTwo)
console.log(newArray)


// class example

function mixedArray(arrayOne, arrayTwo) {
  const combined = []

  arrayOne.forEach(item => {
    arrayTwo.forEach(i => {
      combined.push([item, i])
    })
  })

  return combined
}

console.log(mixedArray(arrayOne, arrayTwo))

// Ryan's example

const combineArr = (arr1, arr2) => arr1.reduce((x, y) => {
  for (item of arr2) {
    x.push([y, item])
  }
  return x
}, [])

console.log(combineArr(arrayOne, arrayTwo))