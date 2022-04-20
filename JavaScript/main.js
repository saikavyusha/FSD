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

 // case 7
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

// method 1
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

// method 2
 if(gen === 'M', age >= 21)
 {
     console.log('You can vote');
 }
if (gen === 'F', age>= 18) {
    console.log('you can vote');
}
else
{
    console.log('you cannot vote');
}

// Operators - AND (&&), OR (||) , NOT (!) (method 3)
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

// Q.1 -> Two numbers -> a / b -> if division is possible
// let a = 100
// let b = 20
// let c = a / b

// if(typeof a === 'number' && typeof b === 'number') {
//     if(b === 0) {
//         console.log('a/b is not possible')
//     } else {
//         console.log('a/b is possible')
//     }
// } else {
//     console.log('Not Possible')
// }

 let val = 13
 if(val % 2 === 0) {
     console.log('EVEN')
 } else {
     console.log('ODD')
 }

let cel = 100
let farh = (cel * (9/5)) + 32
console.log(farh)

// Q. create a discount coupon 'DIV50' which if the user has will get 10% discount else 5% discount.

 let coupon = 'DIV50'
 let shop = 10500
 if(coupon === 'DIV50') {
     // 10% discount
     let discountedPrice = 0.1 * shop
     let toPay = shop - discountedPrice
     console.log(toPay);
 } else {
     // 5% discount
     let discountedPrice = 0.05 * shop
     let toPay = shop - discountedPrice
     console.log(toPay)
 }

// ARRAYS
// 1. By using Array Constructor

let numbers = new Array(100)
let numbers1 = new Array("String", "Values")
let names1 = new Array('Name-1', 'Name-2', 'Name-3', 'Name-4', 'Name-5')
let numbers2 = new Array(100, 200, 300, 400, 500)
console.log(numbers)
console.log(names1)
console.log(numbers1[2])
console.log(numbers2.length)

// 2. By using a [ ]
let stringArray = [ 'str1', 'str2', 'str3', 'str4', 'str5', 'str6' ]
console.log(stringArray)

 let numArray = [ 100, 200, 300, 400, 500 ]
 console.log(numArray)

 const arr = [ 100, 'string', true, null, undefined ]
 console.log(arr)

 const arr2 = [ [10, 20, 30], [40, 50, 60], [79, 80, 90], [100, 110, 120] ]
 console.log(arr2[2][2]);

 const fruits = ['Mango', 'Banana', 'Apple', 'Grapes', 'Orange', 'Pear']

// Add an element in the array
 const newLength = fruits.push('Pinapple')
 console.log(newLength, fruits);

// Remove an element from the array
 const remvedElt = fruits.pop()
 console.log(remvedElt);
 console.log(fruits);

// Removing a data based on index
 fruits.splice(2, 1)
 console.log(fruits)

 const index = fruits.indexOf('Orange')
 console.log(index);

 // CLASSES & OBJECTS

class Form {
    constructor(name, email, password, dob, mobile) {
        this.name = name
        this.email = email
        this.password = password
        this.dob = dob
        this.mobile = mobile
    }
}

// Create an object
 let formSubmissionOne = new Form("Arun Kudiyal", "abc@xyz.com", "myPassword", "05/07/1992", 1234567890)
 console.log(formSubmissionOne);

 let formSubmissionTwo = new Form("New Name", "xyz@abc.com", "examplePwd", "01/02/1998", 345678910)

 let formSubmissionThree = new Form(100)

 console.log(formSubmissionOne)
 console.log(formSubmissionTwo);
 console.log(formSubmissionThree);


 const arr3 = [100, 'string', null, undefined, true]
 console.log(arr3);

// .. contd Arrays
const fruits2 = [ "Mango", "Orange", "Banana", "Pears" ]

// Add a data in the array - push()
 let newLen = fruits.push("Watermelon")
 console.log(fruits, newLen);

// Delete a data from array - pop()
 let poppedVal = fruits.pop()
 console.log(poppedVal);
 console.log(fruits);

// indexOf
 let index1 = fruits.indexOf('Watermelon')
 console.log(index1)

 // spread operator
 let newFruits = [ ...fruits ]
 newFruits.pop()

 console.log(newFruits);
 console.log(fruits)


 const days = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat' ]

days.push('New Day')
days.pop()
console.log(days.slice(1, 6));

 const strings = ['This is a', 'beautiful day', 'Come lets study JS']
 const string = 'This is a beautiful day lets learn JS'
 console.log(string.split(' '))

console.log();

 console.log(days.length);

 // Methods
 console.log(days.indexOf('Thu'))

 const newDays = days.slice(', ')
 console.log(newDays);

console.log(days);
 let newDays1 = days
 let newDays2 = [ ...days ]
newDays.pop()

 console.log(days);
 console.log(newDays);

 const twoDArray = [ [100, 200, 300], [400, 500, 600], [700, 800, 900] ]
 console.log(twoDArray[1][1]);

// OBJECTS IN JS
const person = { 
    name: 'John Doe', 
    age: 40, 
    email: 'john.doe@hotmail.com', 
    phone: '1234567890',
    hobbies: ['Watch TV', 'Playing soccer', 'Listening to Music'],
    address: {
        houseNo: 124,
        street: 'Lane 2',
        city: 'Hyderabad',
        state: 'Telangana',
        country: 'India'
    }
}
 console.log(person);
 console.log(person.name);

 console.log(`Hi, my name is ${person.name}, I am ${person.age} years old. I live in ${person.address.city}, ${person.address.state}`);


 // ARRAY OF OBJECTS (AoO)
const persons = [
    {
        name: 'User - 1', 
        age: 40, 
        email: 'john.doe@hotmail.com', 
        phone: '1234567890',
        hobbies: ['Watch TV', 'Playing soccer', 'Listening to Music'],
        address: {
            houseNo: 124,
            street: 'Lane 2',
            city: 'Hyderabad',
            state: 'Telangana',
            country: 'India'
        }
    }, 
    {
        name: 'User - 2', 
        age: 40, 
        email: 'john.doe@hotmail.com', 
        phone: '1234567890',
        hobbies: ['playing basketball', 'playing chess', 'playing badminton'],
        address: {
            houseNo: 124,
            street: 'Lane 2',
            city: 'Chennai',
            state: 'Tamil Nadu',
            country: 'India'
        }
    }, 
    {
        name: 'User - 3', 
        age: 40, 
        email: 'john.doe@hotmail.com', 
        phone: '1234567890',
        hobbies: ['singing', 'dancing', 'sleeping'],
        address: {
            houseNo: 124,
            street: 'Lane 2',
            city: 'Bangalore',
            state: 'Karnataka',
            country: 'India'
        }
    }
]

 console.log(persons);
 console.log(persons[2].hobbies[1])

// To convert AoO into JSON
const jsonData = JSON.stringify(persons)
console.log(jsonData);

const jsData = JSON.parse(jsonData)
console.log(jsData);


// functions

function add() {
    let a = 100
    let b = 200
    let c = a + b;
    console.log(c);
}

function addTwo(a ,b) {
    if(typeof(a) === 'number' && typeof(b) === 'number') {
        let c = a + b
        console.log(c);
    }
}

function addThree(a ,b) {
    if(typeof(a) === 'number' && typeof(b) === 'number') {
        let c = a + b
        console.log(c);
        return c
    }
}

add()
addTwo(25, 49)

let ans = addThree(10, 35)
console.log(ans);

let sub = (a, b) => {
    if(typeof(a) === 'number' && typeof(b) === 'number') {
        c = a - b
        return c
    }
}

let ans3 = sub(100, 20)
console.log(ans3)


// Q. create a ES6 arrow function to take 2 values, create a pow function which will take the value of base and experiement and generate the power.

function pow(base, exp) {
    return Math.pow(base, exp)
}

const pow1 = ( base, exp ) => Math.pow1(base, exp)
const pow2 = ( base, exp ) => typeof base === 'number' && typeof exp === 'number' ? Math.pow2(base, exp) : -1

const result1 = pow(20, 2)
console.log(result1);

const add1 = (r, s) => {
    t = r + s
    console.log(t)
}

setTimeout(() => add(500, 200), 1000)

const arr5 = [ 'Mango', 'Apple', 'Pineapple' ]
const myObj = { fruit1: 'Some Fruit', fruit2: 'Some Other Fruit' }

const merge = (arr5, myObj) => {
    console.log(arr);
    console.log(myObj);
    myObj.fruit1 = arr5[0]
    myObj.fruit2 = arr5[1]
    console.log(myObj);
}

merge(arr, myObj)

var fun = () => {
    var a = 100
    var b = 200
    console.log(a , b)
}

if(true) {
    const a = 100
    const b = 200
    console.log(a , b)
} else {
    const a = 500
    const b = 500
    console.log(a , b)
}
console.log(a , b)