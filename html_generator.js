// title
// type of heading

function headingGenerator(string, num) {
  if (num < 1) {
    return 'Not a valid argument'
  }

  if (num > 6) {
    return 'Not a valid argument'
  }

  return `<h${num}>${string}</h${num}>`

}

console.log(headingGenerator('hi there', 3))

function headingGenerator2(string, num) {
  if (num >= 1 && num <= 6) {
    return `<h${num}>${string}</h${num}>`
  } else {
    return 'Not a valid argument'
  }
}

console.log(headingGenerator2('hi there', 3))

function headingGenerator3(string, num) {
  return num >= 1 && num <= 6 ? `<h${num}>${string}</h${num}>` : 'Not a valid argument'
}

console.log(headingGenerator3('hi there', 3))

// Jordan's solution

const headingGenerator4 = (title, typeOfHeading) => {
  return `<h${typeOfHeading}>${title}</h${typeOfHeading}>`
}

console.log(headingGenerator4('hi there', 3))