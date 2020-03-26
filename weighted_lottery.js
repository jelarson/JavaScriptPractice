let weights = {
  winning: 2,
  breakEven: 3,
  losing: 5,
}

function weightedLottery(weights) {
  resultsArray = []
  names = Object.keys(weights)
  values = Object.values(weights)
  names.forEach(name => {
    for (value of values) {
      // resultsArray.push(value).fill(name)
      keyArray = new Array(value).fill(name)
      resultsArray.push(...keyArray)
      // resultsArray.push(name)
      break
      // resultsArray.concat(keyArray)
    }
  })
  return resultsArray
  // return resultsArray[Math.floor(Math.random() * resultsArray.length)]
}

console.log(weightedLottery(weights))

// Jordan's Solution

const weightedLottery1 = weights => {
  let containerArray = []

  Object.keys(weights).forEach(key => {
    for (let i = 0; i < weights[key]; i++) {
      containerArray.push(key)
    }
  })

  return containerArray[Math.random() * containerArray.length | 0]
}

console.log(weightedLottery1(weights))