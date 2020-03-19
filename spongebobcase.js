// code challenge: function that takes a string ex:'javascript' and make it spongebob case 'jAvAsCrIpT'


function spongebob(string) {
  newArr = []
  for (x in string) {
    if (x % 2 === 0) {
      newArr.push(string.charAt(x).toLowerCase())
    }
    if (x % 2 != 0) {
      newArr.push(string.charAt(x).toUpperCase())
    }
  }

  return (newArr.join(''))
}

console.log(spongebob('javascript'))
