'use.strict';

// let number = 5; debugger

// // function declaration
// function logNumber() {
//     let number = 4; debugger
//     console.log(number);
// }

// number = 6;

// logNumber(); debugger

// number = 8;

// logNumber(); debugger

function createCounter() {
  let counter = 5;

  const muFunction = function () {
    return ++counter;
  };

  return muFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);


// learn.javascript leacture 

// sum(a)(b) = a+b

function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(5)(1)); // 6

/* .. ваш код для inBetween и inArray */
let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

function inBetween(a, b) {
  return (el) => {
    return el >= a && el <= b;
  };
}

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2
function inArray(arr) {
  return (el) => {
    return arr.includes(el);
  };
}

/// 

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

// по имени (Ann, John, Pete)
// users.sort((a, b) => a.name > b.name ? 1 : -1);

const byField = (fieldname) => (prev, cur) => prev[fieldname] > cur[fieldname] ? 1 : -1;

console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));
console.log(users.sort(byField('name')));

////
function makeArmy() {

  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function () { // функция shooter
      console.log(i); // должна выводить порядковый номер
    };
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();

army[0](); // 0
army[5](); // 5

// FUNCTION OBJECT
function makeCounter() {
  let count = 0;
  const counter = () => count++;

  counter.set = (n) => count = n;
  counter.decrease = () => count--;
  return counter;

}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

counter.set(10); // установить новое значение счётчика

console.log(counter()); // 10

counter.decrease(); // уменьшить значение счётчика на 1

console.log(counter()); // 10 (вместо 11)

/// 

// function sum(a) {
//   return function (b) {
//     return a + b;
//   };
// }

function sum0(a) {
  let counter = a;

  function f(b) {
    counter += b;
    return f;
  }

  // f[Symbol.toPrimitive] = function() {
  //   return counter;
  // };

  f.toString = function() {
    return counter;
  };
  return f;
};
function sum0(a) {

  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}

// console.log doesnt work?, but with alert everything is good
console.log(sum0(1)(2).toString()); // == 3; // 1 + 2
console.log(sum0(1)(2)(3)); // == 6; // 1 + 2 + 3
console.log(sum0(5)(-1)(2)); // == 6;
console.log(sum0(6)(-1)(-2)(-3)); // == 0;
console.log(sum0(0)(1)(2)(3)(4)(5)); // == 15;

