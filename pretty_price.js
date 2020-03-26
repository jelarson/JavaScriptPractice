function prettyPrice(num, cents) {
  let roundedNum = Math.floor(num)
  if (cents >= 1) {
    cents *= .01
    return roundedNum + cents
  }
  if (cents < 1) {
    return roundedNum + cents
  }
}

console.log(prettyPrice(4.25, 99))
console.log(prettyPrice(4.25, .99))
console.log(prettyPrice(4.25, .00))
console.log(prettyPrice(4.25, 00))


function prettyPrice1(dollar, cents) {
  return cents >= 1 ? cents * .01 + Math.floor(dollar) : cents + Math.floor(dollar)
}

console.log(prettyPrice1(4.25, 99))
console.log(prettyPrice1(4.25, .99))
console.log(prettyPrice1(4.25, 00))
console.log(prettyPrice1(4.25, .00))
