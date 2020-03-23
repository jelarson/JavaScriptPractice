// A digital root is the recursive sum of all the digits in a number. 
// Given n, take the sum of the digits of n. If that value has more 
// than one digit, continue reducing in this way until a single-digit 
// number is produced. This is only applicable to the natural numbers.

function digitalRoot(num) {
  emptyArray = []
  numArray = num.toString().split('')
  for (x of numArray) {
    emptyArray.push(Number(x))
  }
  result = emptyArray.reduce((a, b) => a + b, 0)
  if (result.toString().length === 1) {
    return result
  } else {
    return digitalRoot(result)
  }
}

console.log(digitalRoot(6))
console.log(digitalRoot(12))
console.log(digitalRoot(1234))
console.log(digitalRoot(123456789))
console.log(digitalRoot(9999999999999999999))
