function manualExponent(base, power) {
  return base ** power
}

console.log(manualExponent(2, 3))

function manualExponent1(base, power) {
  let total = base
  if (power === 0) {
    return 1
  } else {
    for (var i = power - 1; i > 0; i--) {
      total *= base
    }
  }
  return total
}

console.log(manualExponent1(2, 3))

// Jordan's solution

function manualExponent2(num, exp) {
  const items = Array(exp).fill(num);
  const reducer = (total, currentValue) => total * currentValue;
  return items.reduce(reducer);
}

console.log(manualExponent2(2, 3))

// Ryan's solution

function manualExponent3(base, power) {
  return new Array(power).fill(base).reduce((x, y) => x * y)
}

console.log(manualExponent3(2, 3))

// Instructor solution

function manualExponent4(num, exp) {
  const baseArr = num.toString().repeat(exp).split('')

  reducer = (bassArr, idx) => baseArr * idx

  return baseArr.reduce(reducer)
}

// console.log(manualExponent4(2, 3))

// while loop

function manualExponent5(base, exp) {
  let counter = exp - 1
  let total = base

  while (counter > 0) {
    total *= base
    counter--
  }

  return total
}

console.log(manualExponent5(2, 3))

// do-while loop

function manualExponent6(base, exp) {
  let counter = exp - 1
  let total = base

  do {
    total *= base
    counter--
  } while (counter > 0)

  return total
}

console.log(manualExponent6(2, 3))

// for loop

function manualExponent7(base, exp) {
  let total = base
  for (let i = exp - 1; i > 0; i--) {
    total *= base
  }
  return total
}

console.log(manualExponent7(2, 3))