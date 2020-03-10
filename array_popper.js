const numbers = [1, 2, 3, 4, 5]
const letters = ['a', 'b', 'c', 'd', 'e']

function arrayPopper(numbers) {
  if (numbers.length % 2 === 0) {
    return numbers.pop()
  } else {
    return numbers.shift()
  }
}


console.log(arrayPopper(numbers))
console.log(arrayPopper(numbers))
console.log(arrayPopper(numbers))
console.log(arrayPopper(numbers))
console.log(arrayPopper(numbers))
console.log('')
console.log(arrayPopper(letters))
console.log(arrayPopper(letters))
console.log(arrayPopper(letters))
console.log(arrayPopper(letters))
console.log(arrayPopper(letters))
console.log('')

const numbers2 = [6, 7, 8, 9, 10]

function arrayPopper2(numbers2) {
  return numbers2.length % 2 === 0 ? console.log(numbers2.pop()) : console.log(numbers2.shift());
}

arrayPopper2(numbers2);
arrayPopper2(numbers2);
arrayPopper2(numbers2);
arrayPopper2(numbers2);
arrayPopper2(numbers2);

console.log('')

// Ryan's solution

class Popper {
  constructor(numbers3) {
    this.numbers3 = numbers3
  }
  run() {
    if (this.numbers3.length % 2 === 0) {
      console.log(this.numbers3.pop())
    } else {
      console.log(this.numbers3.shift())
    }
  }
}

const numbers3 = [11, 12, 13, 14, 15]

const poppin = new Popper(numbers3)

poppin.run()
poppin.run()
poppin.run()
poppin.run()
poppin.run()

console.log('')

// Jordan's Solution

class ArrayPopper {
  constructor(numbers4) {
    this.numbers4 = numbers4
    this.atBeginning = true;
  }

  togglePopper() {
    this.atBeginning = !this.atBeginning;
    return this.atBeginning ? this.numbers4.pop() : this.numbers4.shift();
  }
}

const numbers4 = [16, 17, 18, 19, 20];

const ap = new ArrayPopper(numbers4);

console.log(ap.togglePopper())
console.log(ap.togglePopper())
console.log(ap.togglePopper())
console.log(ap.togglePopper())
console.log(ap.togglePopper())