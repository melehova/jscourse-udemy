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

    const muFunction = function() {
        return ++counter;
    };

    return muFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);