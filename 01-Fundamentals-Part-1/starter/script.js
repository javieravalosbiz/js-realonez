//https://codingheroes.io/assignments/javascript-fundamentals-part-1.html

console.log('---------- Exercise 01 ----------')

let country = 'mexico' 
let continent = 'america'
let population = 1000000

console.log(country)
console.log(continent)
console.log(population)

console.log('---------- Exercise 02 ----------')

let isIsland = false
let language

console.log(typeof isIsland)
console.log(typeof population)
console.log(typeof country)
console.log(typeof language)

console.log('---------- Exercise 03 ----------')

language = 'spanish'
console.log('changing a variable to a const variable will throw an error')

console.log('---------- Exercise 04 ----------')

let halfOne = population / 2
console.log(halfOne)
population = population + 1
console.log(population)

let finlandPopulation = 6000000 

if (population > finlandPopulation) {
    console.log('Mexico has more people than Finland')
} else {
    console.log('Mexico has less people than Finland')
}

let averagePopulation = 33000000

if (population < averagePopulation) {
    console.log('Mexico has less people than the average country')
} else { 
    console.log('Mexico has more people than the average country')
}

let description = `${country} is in ${continent}, and its ${population} people speak ${language}`

console.log(description)

console.log('---------- Exercise 05 ----------')

//* i already used the TEMLPATE LITERAL in the previous exercise, which is the same as string interpolation
console.log('template literal is the same as string interpolation')

console.log('---------- Exercise 06 ----------')

if (population > averagePopulation) {
    console.log(`${country}'s population is ${population - averagePopulation} above average`)
} else {
    console.log(`${country}'s population is ${averagePopulation - population} below average`)
}


console.log('---------- Exercise 07 ----------')

console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> 
console.log('19' - '13' + 17); // -> ?
console.log('123' < 57); // -> ?
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> ?

//* javascript will convert the string to a number when it is used in a mathematical operation

console.log('---------- Exercise 08 ----------')

//changed this to a number
//let numNeighbours = Number(prompt('how many neighbors does your country have?'))

// if (numNeighbours === 1) {
//     console.log('Only 1 border!')
// } else if (numNeighbours > 1) { 
//     console.log('More than 1 border')
// }

console.log('numneightbours is not defined')

console.log('---------- Exercise 09 ----------')

if (language === 'english' && population < 50000000 && !isIsland) {
    console.log(`You should live in ${country} :)`)
} else {
    console.log(`${country} does not meet your criteria :(`)
}

console.log('---------- Exercise 10 ----------')

switch (language) {
  //this first one cool, both fall intot he same case
  case 'chinese':
  case 'mandarin':
    console.log('MOST number of native speakers!')
    break
  case 'spanish':
    console.log('2nd place in number of native speakers')
    break
  case 'english':
    console.log('3rd place')
    break
  case 'hindi':
    console.log('Number 4')
    break
  case 'arabic':
    console.log('5th most spoken language')
    break
  default:
    console.log('Great language too :D')
}

console.log('---------- Exercise 11 ----------')

population > 33000000 ? console.log(`${country}'s population is above average`) : console.log(`${country}'s population is below average`)


