'use.strict';

// let a = 5,
//     b = a;

// b += 5;
// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // посилання
// copy.a = 10; // модифікуємо вихідний об'єкт

// console.log(copy, obj);

function copy(mainObj) {
    let objCopy = {};
    for (let key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4,
    },
};

const newNumbers = copy(numbers);
newNumbers.c.x = 8;
newNumbers.a = 8;
// console.log(newNumbers, numbers);

const add = {
    d: 17,
    e: 20,
    k: {
        x: 7,
        y: 4,
    },
};
const clone = Object.assign({}, add);
clone.d = 21;
clone.k.x = 10;
// console.log(clone);
// console.log(add);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'okeeey';

// console.log(newArray);
// console.log(oldArray);

const video = ['youtube', 'vimeo', 'okey'],
    blogs = ['wordpress', 'liejournal', 'blogger'],
    internet = [...video, ...blogs, 'insta'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2,5,8];

log(...num);

const array = ['a', 'b'];
const newArray1 = [...array];

const q = {
    one: 1,
    two: 2,
    three: {
        a: 5,
    }
};

const newObj = {...q};

console.log(q, newObj);