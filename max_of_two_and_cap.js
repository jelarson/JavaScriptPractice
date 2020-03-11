// Write a function that will capitalize the first letter in a string
// ex: "jesse is the man" => "Jesse is the man"


stringLower = "jesse is my name"

function funkyFunc(stringLower) {
  stringUpper = stringLower.charAt(0).toUpperCase() + stringLower.slice(1)
  return stringUpper
}

console.log(funkyFunc(stringLower))

console.log('')
// Write a function that takes two numbers as arguments and returns the largest number
// ex: numcompare(1, 3) => 3 || "3 is the largest number"


function funkyFunc1(num1, num2) {
  if (num1 > num2) {
    return num1 + " is bigger than " + num2
  }
  if (num2 > num1) {
    return num2 + " is bigger than " + num1
  }
  if (num2 === num1) {
    return num1 + " is equal to " + num2
  }
}

console.log(funkyFunc1(2, 0))
console.log(funkyFunc1(-200, -90))
console.log(funkyFunc1(55, 55))

console.log('')

function funkyFunc2(num1, num2) {
  return num1 !== num2 ? (num1 > num2 ? num1 + " is bigger than " + num2 : num2 + " is bigger than " + num1) : num1 + " is equal to " + num2
}

console.log(funkyFunc2(8, 7))
console.log(funkyFunc2(60, 110))
console.log(funkyFunc2(75, 75))
