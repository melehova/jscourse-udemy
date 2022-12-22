'use.strict';

const arr = [1, 22, 13, 6, 58];

arr.pop();
arr.push(10);

console.log(arr);

// !!! can use 'break' / 'cotinue'
for (let i of arr) {
    console.log(i);
}

console.log(arr.length);
arr[99] = 0;
console.log(arr.length);


//          item index array
arr.forEach((el, i, arr) => {
    console.log(el, i, arr);
});

const str = prompt('', '');
const products = str.split(', ');

console.log(products);
products.sort();
console.log(products.join('-ok-'));

// quick sort
arr.sort((a, b) => a - b);
console.log(arr);