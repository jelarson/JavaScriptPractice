// Write me a program that counts to 10 by 2 in JS

function counter() {
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i)
    }
  }
}

counter()

console.log('')
// Class example

function counter1() {
  for (let i = 0; i <= 10; i += 2) {
    console.log(i)
  }
}

counter1()

console.log('')

// Ryan's example

for (let i = 2; i < 11; i += 2);