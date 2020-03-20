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

function spongebob2(str) {
  let newArr = []
  str.split('').forEach((item, idx) => {
    if (idx % 2 === 0) {
      newArr.push(item.toUpperCase())
    } else {
      newArr.push(item)
    }
  })
  return (newArr.join(''))
}

function spongebob3(str) {
  return str.split('').map((item, idx) => {
    if (idx % 2 === 0) {
      return item.toUpperCase()
    } else {
      return item
    }
  }).join('')

}

console.log(spongebob2('yoyoyo'))
console.log(spongebob3('yoyoyo'))
