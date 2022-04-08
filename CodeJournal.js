// Variables - containers that store values
var name; // a declared variable, but not initialized (no value) and it's in the global scope (BAD)
let foo; // a declared variable that can be changed
const bar = "Bar"; // a declared variable that cannot be changed - short for "constant"
// '=' is the asssignment operator, read it as "is assigned the value of..."
const ANSWER = 42;


// Strings - collection of characters
let string1 = "Hello World!";  
string1 = "Hello Utah!"; // let allows me to change the value of the variable
let string3 = new String("Hello New World!");


// Numbers
let myNum = 293874923874;
let floatNum = 75.25;
"1" == 1; // because of type coercion and loose equality checking, this is true
"1" === 1; // false, because this is strict equality checking


// Boolean
let myBool = false;
// check into truthy and falsy values
// Array
let myArray = []; // this is an empty array
// 0 indexed:   0     1       2       3      4
let myArray2 = [42, "Bob", myBool, ANSWER, true];
let lastItem = myArray2[myArray2.length - 1]


// Objects
let minObject = {};  // this is the most minimal javascript object you can have
let myCar = { // JS objects are comprised of key:value pairs
  make: 'Jeep',
  model: 'Cherokee',
  year: '1998',
  vin: '230894720893749238748'
}
let newVar = myCar.make; // used dot notation (.) to access an object's property value
myCar.numDoors = 6;  // can also use dot notation to add a property to an object
const anotherObject = {
  wordz: ['foo', 'bar', 'baz'],
  car: {
    make: 'McLaren',
    model: '720S'
  },
  awesomeness: true
}


// Functions

function myFunction() {
  return "My greeting to you from this very fine, simple function!"
}
function sumTwoThings(thing1, thing2) {
  return thing1 + thing2;
}
// Filter method example.  Filter returns an array of all elements that 'pass the test'
const pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels"
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire"
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire"
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels"
  }
]

const rebels = pilots.filter(pilot => pilot.faction === "Rebels")

const empire = pilots.filter((pilot) => {
  return pilot.faction === "Empire"
})


// Array helper method 'map' example
let filmURLs = [
  "https://swapi.co/api/films/",
  "https://swapi.co/api/films/5/",
  "https://swapi.co/api/films/4/this one is longer... even longer",
  "https://swapi.co/api/films/6/",
  "https: ",
  "https://swapi.co/api/films/1/"
]

const filmLengths = filmURLs.map(filmURL => filmURL.length)

const filmPlusMore = filmURLs.map((filmURL) => {
  let filmObj = {
    url: filmURL,
    createdDate: Date.now()
  }
  return filmObj
})

const pilotNames = pilots.map(pilot => pilot.name)

// Ternary (tres leches) operator syntax: condition ? exprIfTrue : exprIfFalse


// Reduce example

const swpilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22
  },
]
            // first time through    0     {}       0  +     14  
const totalYears = swpilots.reduce((acc, pilot) => acc + pilot.years, 0) //the 'accumulated' value of 14 becomes the value of acc

const mostExpPilot = swpilots.reduce((oldest, pilot) => oldest.years > pilot.years ? oldest : pilot)