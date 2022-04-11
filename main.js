console.log('hello from js...');
console.error('this is an error');
console.warn('this is a warning');

// alert('this is alert')
// alert will be received as a notification

// case 1
variableOne = '100'
varTwo = variableOne + 23
console.log(typeof variableOne)
console.log(varTwo)

// case 2
varThree = false
varFour = varThree + 200
console.log(varFour)

// case 3
result = 100 / 0
console.log(result)

// case 4
console.log('200' + 'JavaScript')

// case 5
a = null
console.log(typeof a)

b = undefined
console.log(typeof b)

// case 6
console.log(100 + '200' + false);
console.log('String' - 'String' + false) // NaN
console.log('100' + '200' + true)

let e = 'Arun'
console.log(e)

var f = true
console.log(f)

const g = null
console.log(g)

console.log(true + 100 +'300' - false);
console.log(700+'600'/0);
console.log('name'+'age'+false+null);
console.log(100+200+'700'-'300'/0);
console.log('500'-'700'/'string'+false);

// STRINGS (2methods)

// 1. using " ", ' ', ` `
let name = 'Naman'
console.log('The length of the string is : ' + name.length)
console.log(name[1]);

// // 2. using String() constructor
let name2 = new String('Naman')
console.log('The length of the string is : ' + name2.length)
console.log(name2[2]);
console.log(name2);

// String Methods
// 1. case-changing-methods
let str = 'some Value'
console.log(str.toUpperCase())
console.log(str.toLowerCase())

// Conditionals
 let someVal = false
 if(someVal) {
     console.log('Yes')
 } else {
     console.log('No')
}

// Q:- str, if the 3rd character is 'm' or not
 let str2 = 'Arun'
 if(str2[2] == 'm') {
     console.log('YES')
 } else {
     console.log('NO')
 }

 const h = 100
 const i = 100

 if(h === i) {
     console.log('Equal')
 } else {
     console.log('Unequal')
 }


// Q:- Given an age and gender of a person, create a program to check if he or she can vote
// age = F >= 18 -> Vote
// age = M >= 21 -> Vote
const gen = 'F'
const age = 17


if(gen === 'M') {
     if(age >= 21) {
         console.log('You can Vote')
     } else {
         console.log('You can NOT Vote')
     }
 } else {
     if(age >= 18) {
         console.log('You can Vote')
     } else {
         console.log('You can NOT Vote')
     }
 }


// Operators - AND (&&), OR (||) , NOT (!)
if(gen == 'M' && age >= 21) {
     console.log('You can Vote');
} else if(gen === 'F' && age >= 18) {
     console.log('You can Vote');
 } else {
     console.log('You Can NOT Vote');
 }


// Finding the index
const str3 = 'My name is Arun Kudiyal'
console.log(str3.length)

console.log(str3[2])
console.log(str3.indexOf('a'))

// Sub - String - 2 functions
console.log(str3.substr(7));
console.log(str3.substring(0, 9))

const names = 'Pavan, Ram, Arun, Pranay, Dinesh, Ayesha'
let response = names.split(', ')
console.log(response)

console.log(names[3]);
console.log(names.charAt(3))

