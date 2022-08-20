// Import stylesheets
import './style.scss';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

// arrow functions
const logValue = (element: (string | number)[]): (string | number)[] => {
  const outputNumber = element;
  return outputNumber;
};

// arrow functions logged in DOM
const logValueDOM = (element) => {
  const mapOutput = document.createElement('div');
  mapOutput.setAttribute('class', 'output-container');
  mapOutput.style.background = 'rebeccapurple';
  mapOutput.style.color = 'white';
  mapOutput.textContent = element;
  appDiv.appendChild(mapOutput);
};

logValueDOM(['hello my sweet Samurana!', 'hi!'].map((el) => el));

// global values
const testArray = [1, 2, 3, 4, 5, ''];
const testArrayOfObjects = [
  { id: 1, name: 'Brunino', age: 'young' },
  { id: 2, name: 'Brunone', age: 'older' },
  { id: 3, name: 'Bruno', age: 'perfect' },
];

// map
const newArray = testArray.map((value: number, index, arr: []): void => {
  console.log(value);
  console.log(index);
  console.log(arr);
});

console.table(newArray);

// forEach
let arrayOfNames = [];

testArrayOfObjects.forEach((value) => {
  /* arrayOfNames.push(value.name)   */
  arrayOfNames = [...arrayOfNames, value.name]; // spread current array elements and add value at the end (or front)
});

console.log(arrayOfNames);

// some
const someResult = testArray.some((element): void => {
  // console.log(typeof element === 'string')
  element === 1;
});

console.log(someResult);

// every
// Only returns true if all elements meet the requirements.

const everyResult = testArray.every((element): void => {
  // console.log(typeof element === 'string')
  element === 1;
});

console.log('Every result = 1? ', everyResult);

// includes
// Predefined idea, already has euqalTo comparison predefined.

const includesResult = testArray.includes(100);
console.log('Includes result: ', includesResult);

// find
const foundElement = testArray.find((element): boolean => {
  return element > 2; // Type of data is boolean (> check true/false) even though find then also gives back specific value.
});

console.log(foundElement);

// findIndex
const foundElementIndex = testArray.findIndex((element): boolean => {
  return element > 2; // Data type is still boolean but index is 2.
});

console.log(foundElementIndex); // Number 3 is at index 2.

// from
// Main use case: converting DOM node lists into an iterable array.
console.log(Array.from('test'));

// split
const message = "You're the best!";

const splitMessage = message.split('!'); // Splits on character/space in quotes.
console.log(splitMessage);

// join

const messageToBruno = 'Bruno is the best!';

const joinedMessageToBruno = messageToBruno.split(' ').join('<3'); // Splits on character/space in quotes.
console.log('Message to Bruno', joinedMessageToBruno);

// concat
const arr1 = ['23', '42', 'Bruno'];
const arr2 = ['29', 'Johanna', 'Pizza Carbonara'];

console.log('2 arrays make 1:', arr1.concat(arr2));

// sort
// Careful: Mutates array in place if not reassigned to a new array.
const arrayOfNumbers = [4, 74, 1, 3423, 6, 42434, 543, 12, 29, 35];
const arrayOfString = ['Bruno', 'Runo', 'Uno', 'No', 'O'];

const sortedNumbers = arrayOfNumbers.sort((a, b) => {
  return a - b;
});
console.log('Array numbers ascending: ', sortedNumbers);

const sortedBrunos = arrayOfString.sort().reverse();
console.log('Array of Brunos descending: ', sortedBrunos);

// filter
// Reusing const arrayOfNumbers
const filteredArrayOfNumbers = arrayOfNumbers.filter((element) => {
  return element > 100;
});

console.log('Numbers bigger than 100: ', filteredArrayOfNumbers);

// reduce
// Reusing const arrayOfNumbers
const sumOfArray = arrayOfNumbers.reduce((previous, current) => {
  return previous + current;
}, 0);

console.log('Total:', sumOfArray);

// slice
// Retruns a new array.

// splice
// Works with original array.
